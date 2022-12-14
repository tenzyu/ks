#!/usr/bin/env zx

import { $ } from 'zx'
import { VITE_REACT } from './templates'
;(async () => {
  const basepath = process.argv[2] ?? '.'

  await $`mkdir -p ${basepath}/public`
  await $`mkdir -p ${basepath}/src/assets`
  Object.entries(VITE_REACT).forEach(([filename, content]) => {
    $`echo ${content} > ${basepath}/${filename}`
  })
  await $`pnpm update`
  await $`pnpm outdated`
})()
