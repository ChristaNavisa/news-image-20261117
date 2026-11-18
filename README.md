# Sum up 17 November's world news in one image

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/ChristaNavisa/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/ChristaNavisa/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Entry for the [make.fun competition "Sum up 17 November's world news in one image"](https://make.fun/bounty/news-image-20261117).

## The image

A newspaper front page for **Tuesday, 17 November 2026**, drawn from scratch
with Python and Pillow (flat vector-style illustration, every caption fitted
inside its own panel):

- **Lead — Kerch Bridge down:** Ukraine's strike drops a road arch and span
  into the Kerch Strait, the second hit in two days; rail is back on one track.
- **Tankers hit by mines:** a supertanker and an LPG carrier catch fire in the
  Strait of Hormuz; a third US carrier sails into the Gulf.
- **Iran drones at US base:** drones fired at a US radar base in Bahrain are
  all intercepted; no one is hurt.
- **Trump lands in Asia:** arrives in Manila for ASEAN and the Quad;
  Xi–Trump–Putin meet in Shenzhen on Thursday.
- **Kyiv's bridges hit:** Russian missiles strike bridges in Kyiv as
  overnight attacks kill two in the capital.
- **Rwanda return hub:** five EU states plan to send rejected asylum seekers
  to a centre in Rwanda.
- **Voyager 1, one light-day out:** NASA asks the world to flash "V-G-R"
  tonight as the probe nears the mark.
- **Also today:** JPMorgan blames a software bug for Monday's bank outage;
  Japan scrambles jets over Russian planes; 100,000+ join pay protests
  across France; Nvidia reports earnings after the close.

Sources: BBC, Reuters, AP, Al Jazeera. All events happened or were first
reported on 17 November 2026.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. No network, deterministic: two runs write
byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
