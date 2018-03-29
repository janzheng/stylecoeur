---
title: Z-Index
type: styleguide
layout: layout-coeur-knowbase
name: zindex
section: fundamental
status: --draft
source: ../../
---


<main markdown="1">

## Z Index

Manage z indices w/ a z-index manager mixin

- can refer to z-indices by name instead of by a made-up number
- let the system manage z-order
- abstract z-order with names instead of random numbers
- create a system that makes sense
  - 0-99 - local, component indice
  - 1/2/3...00 - prioritized z-index layers
  - 900-999 - top-level reactive components like nav, menus, dropdowns
  - 1000 - "absolute top"
  - 1000+ - only temporary components like popups, alerts, etc.

</main>