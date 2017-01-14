# Konačni automat (konačna mašina stanja)

Implementacija konačnog automata u Node.js-u.

## Tablica prelaza stanja

Za svaki konačni automat neophodno je napraviti tablicu prelaza stanja. Kolone su stanja, redovi su prelazi, a njihove kombinacije su funkcije.

| AUTOMAT | ugasen | upaljen | uspavan |
| upali   | pali   | javi    | pali    |
| ugasi   | javi   | gasi    | gasi    |
| uspavaj | javi   | spavaj  | javi    |

## Pokretanje

Automatu je potrebno proslediti prelaz u vidu argumenta, putem komandne linije:

node automat.js upali
