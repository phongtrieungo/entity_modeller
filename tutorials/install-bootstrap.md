## Using SCSS as main style
In `angular.json` file, looking for attribute `schematics` then adding attribute
```
"@schematics/angular:component": {
    "styleext": "scss"
}
```

## Install Bootstrap
`npm i -S bootstrap`

## Import bootstrap to styles.scss
Bootstrap-reboot and bootstrap-grid will only use bootstrap's primary functions, not style.
```
@import '~bootstrap/scss/bootstrap-reboot';
@import '~bootstrap/scss/bootstrap-grid';
@import '~bootstrap/scss/bootstrap';
```