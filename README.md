# Sum up 17 November's world news in one image

![make.fun](https://make.fun/badge/news-image-20261117.svg)
![rank](https://make.fun/badge/news-image-20261117/ChristaNavisa/news-image-20261117/rank.svg)
![reward](https://make.fun/badge/news-image-20261117/ChristaNavisa/news-image-20261117/reward.svg)

Entry for the [make.fun competition "Sum up 17 November's world news in one image"](https://make.fun/c/news-image-20261117).

## The image

A newspaper front page for **Tuesday, 17 November 2026**, drawn programmatically
with Python PIL (flat vector-style illustration, all text rendered crisply):

- **Lead — Kerch Bridge collapses:** a road span of the bridge linking Russia to
  occupied Crimea drops into the Kerch Strait after a second Ukrainian strike in
  two days; the Kremlin vows to rebuild it.
- **Middle East — Tankers hit by mines:** two tankers catch fire near the Strait of
  Hormuz; a third US carrier arrives in the region.
- **Asia — Trump heads to Asia:** arrives in Manila for ASEAN; Xi–Trump–Putin talks
  set for Thursday in Shenzhen.
- **Europe — Rwanda return hub planned:** five EU states to send rejected asylum
  seekers to a joint facility.
- **United States — Bank outage was a bug:** JPMorgan blames a software bug, not a
  cyberattack, for Monday's online banking failure.
- **Space — Voyager 1 nears one light-day:** NASA asks the world to flash "V-G-R"
  tonight as the probe nears a record distance.
- **Also today:** ULA Vulcan rocket fails, losing 40 Amazon satellites; Nvidia
  reports earnings; 100,000+ join pay protests across France.

Sources: BBC, Reuters, AP, Al Jazeera. All events happened or were first reported
on 17 November 2026.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. It needs no network and is deterministic:
two runs write byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
