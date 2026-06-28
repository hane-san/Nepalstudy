# NepalStudy

Kathmandu red Nepali grammar card app prototype.

## What this is

NepalStudy is a mobile-first HTML study-card app for learning Nepali through sentence patterns.

Current prototype features:

- Japanese prompt cards with simple British English support text
- Nepali answer cards with Devanagari, grammar-split romanisation, katakana pronunciation, and Japanese translation
- Swipe-based card navigation
- Tap-to-play Nepali TTS via browser SpeechSynthesis
- Grammar map panel
- Vocabulary map panel with word-level audio
- Kathmandu red visual theme and Nepali/Himalayan app icon

## Files

```text
index.html
manifest.webmanifest
assets/icons/
```

## Run locally

Open `index.html` directly in a browser, or use a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

1. Create a GitHub repository named `NepalStudy`.
2. Upload these files to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Set **Deploy from a branch**.
5. Choose `main` and `/root`.
6. Open the published GitHub Pages URL.

## Pronunciation notation policy

The app uses learner-oriented katakana pronunciation hints:

- Long vowels use `ー`.
- Aspirated consonants use small `ㇵ`, e.g. `khā` = `カㇵー`, `bhāt` = `バㇵート`.
- Retroflex consonants use underdot-style markers, e.g. `ṭa` = `タ̣`, `ḍa` = `ダ̣`.
- Final inherent `a` is usually omitted or weakened.
- Nasal vowels are shown with `ン` when useful.
- `r` is represented with Japanese ラ行.
- Frequent words may be hand-adjusted toward actual spoken sound.

## Next build tasks

- Split lesson/card data out of `index.html` into `cards.js` or `data/cards.json`.
- Add the first 12 lesson sets.
- Expand the grammar map and vocabulary map.
- Replace browser TTS with recorded audio or generated audio files if Nepali TTS is unstable.
