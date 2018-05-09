# Actualizar tu rama local con Master

Primero tienes que regresar a la rama de `master` en tu copia local
```
git checkout master
```

A continuacion descargas la rama `master` original
```
git fetch upstream
```

Sincronizas tu copia local con el repositorio original
```
git pull --rebase upstream master
```

Subes los cambios a tu copia local
```
git push
```