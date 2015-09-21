# geohash-grid

Given a bounding box, stream out a grid of hashes

```
npm install geohash-grid -g
```

## Usage

``` js
geohash-grid 53.639554 -113.654585 53.440018 -113.349715
```

And the output will be NDJSON like

```
{"hash":"c3x25bw","row":145,"col":199}
{"hash":"c3x25bx","row":145,"col":200}
{"hash":"c3x2h08","row":145,"col":201}
{"hash":"c3x2h09","row":145,"col":202}
{"hash":"c3x2h0d","row":145,"col":203}
{"hash":"c3x2h0e","row":145,"col":204}
{"hash":"c3x2h0s","row":145,"col":205}
{"hash":"c3x2h0t","row":145,"col":206}
{"hash":"c3x2h0w","row":145,"col":207}
{"hash":"c3x2h0x","row":145,"col":208}
{"hash":"c3x2h28","row":145,"col":209}
{"hash":"c3x2h29","row":145,"col":210}
```

## License

MIT
