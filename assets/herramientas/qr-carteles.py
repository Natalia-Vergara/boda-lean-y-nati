#!/usr/bin/env python3
"""Redibuja el QR de carteles.html y tarjetas.html apuntando a otra dirección.

Sólo hace falta si la dirección de la página de fotos cambia. Ojo: el papel
ya impreso sigue apuntando a la dirección vieja, así que normalmente conviene
cambiar la redirección de fotos/index.html en vez de rehacer el QR.

    pip install segno
    python3 assets/herramientas/qr-carteles.py https://…/otra-direccion/
"""
import re
import sys
from pathlib import Path

import segno

RAIZ = Path(__file__).resolve().parents[2]
PAGINAS = ('carteles.html', 'tarjetas.html')

# El <symbol id="qr"> y nada más: en tarjetas.html hay otro viewBox, el del
# dibujo de la cámara, que no hay que tocar.
SIMBOLO = re.compile(
    r'(<symbol id="qr" viewBox="0 0 )\d+ \d+("[^>]*>\s*<path fill="currentColor"'
    r' shape-rendering="crispEdges" d=")[^"]*"')
DIRECCION = re.compile(r'(<p class="tarjeta__url">)[^<]*</p>')


def dibujar(url):
    """Devuelve el atributo `d` de un <path> con el QR entero, y su tamaño.

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
    visible = re.sub(r'^https?://', '', url)

    for nombre in PAGINAS:
        pagina = RAIZ / nombre
        html = pagina.read_text(encoding='utf-8')

        html, cambios = SIMBOLO.subn(
            lambda m: f'{m.group(1)}{modulos} {modulos}{m.group(2)}{d}"', html)
        if cambios != 1:
            sys.exit(f'{nombre}: esperaba un solo <symbol id="qr">, encontré {cambios}')

        # La dirección escrita en letra chica, donde la haya.
        html = DIRECCION.sub(lambda m: f'{m.group(1)}{visible}</p>', html)

        pagina.write_text(html, encoding='utf-8')
        print(f'{nombre}: QR de {modulos} módulos → {url}')


if __name__ == '__main__':
    main()
