# Konačni automat (mašina konačnih stanja)

Implementacija konačnog automata u Node.js-u.

## Tablica prelaza stanja

Za svaki konačni automat neophodno je napraviti tablicu prelaza stanja. Gornje kolone su stanja, redovi levo su događaji, a njihove kombinacije su prelazi.
```
| AUTOMAT  | ugasen | upaljen | uspavan |
| paljenje | pali   | javi    | pali    |
| gasenje  | javi   | gasi    | gasi    |
| spavanje | javi   | spavaj  | javi    |
```
## Pokretanje

Automatu je potrebno proslediti željeni događaj u vidu argumenta, putem komandne linije:
```js
node automat.js paljenje
```
