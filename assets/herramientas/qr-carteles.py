#!/usr/bin/env python3
"""Redibuja el QR de carteles.html apuntando a otra dirección.

Sólo hace falta si la dirección de la página de fotos cambia. Ojo: los
carteles ya impresos siguen apuntando a la dirección vieja, así que
normalmente conviene cambiar la redirección de fotos/index.html en vez de
rehacer el QR.

    pip install segno
    python3 assets/herramientas/qr-carteles.py https://…/otra-direccion/
"""
import re
import sys
from pathlib import Path

import segno

PAGINA = Path(__file__).resolve().parents[2] / 'carteles.html'


def dibujar(url):
    """Devuelve el atributo `d` de un <path> con el QR entero.

    Cada fila se recorre juntando los módulos oscuros que van seguidos, así
    salen unos pocos rectángulos largos en vez de uno por módulo.
    """
    matriz = [list(fila) for fila in segno.make(url, error='m').matrix]
    partes = []
    for y, fila in enumerate(matriz):
        x = 0
        while x < len(fila):
            if not fila[x]:
                x += 1
                continue
            ini = x
            while x < len(fila) and fila[x]:
                x += 1
            largo = x - ini
            partes.append(f'M{ini} {y}h{largo}v1h-{largo}z')
    return ''.join(partes), len(matriz)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    url = sys.argv[1]
    d, modulos = dibujar(url)

    html = PAGINA.read_text(encoding='utf-8')
    html = re.sub(r'viewBox="0 0 \d+ \d+"', f'viewBox="0 0 {modulos} {modulos}"', html)
    html = re.sub(r'(<path fill="currentColor" shape-rendering="crispEdges" d=")[^"]*"',
                  lambda m: m.group(1) + d + '"', html)
    # La dirección también está escrita en letra chica abajo del código.
    visible = url.replace('https://', '').replace('http://', '')
    html = re.sub(r'(<p class="tarjeta__url">)[^<]*</p>',
                  lambda m: m.group(1) + visible + '</p>', html)
    PAGINA.write_text(html, encoding='utf-8')
    print(f'{PAGINA.name}: QR de {modulos} módulos → {url}')


if __name__ == '__main__':
    main()
