![CI](https://github.com/MikaelPorttila/rss/workflows/CI/badge.svg?branch=master)

## About
RSS Parser module for Deno.
The project aims to provide a lightweight feed parser which supports both RSS and ATOM.

## Usage

``` typescript
import { parseRss } from 'https://raw.githubusercontent.com/MikaelPorttila/rss/master/mod.ts';

const response = await fetch('http://static.userland.com/gems/backend/rssTwoExample2.xml');
const xml = await response.text();
const [feedType, feed] = await parseRss(xml);
```

## Benchmark
Hardware: i7-9750H 2.60GHz, 32GB 2667 MHz.

Rounds: 10000

| Release | ATOM (2KB sample) | RSS 2.0 (4 KB sample) | RSS 1.0 (3 KB sample) |
|---------|-------------------|-----------------------|-----------------------|
| 0.1     | 0.193ms           | 0.525ms               | 0.1912ms              |

