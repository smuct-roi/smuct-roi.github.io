---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Seminar: \"Context Mixing in Transformers\""
# event:
# event_url:
location: Abacws
# address:
#   street:
#   city:
#   region:
#   postcode:
#   country:
summary: Talk by [Hosein Mohebbi](https://hmohebbi.github.io/) (Tilburg University, Netherlands)
abstract: "In both text and speech processing, variants of the Transformer architecture have become ubiquitous. The key advantage of this neural network topology lies in the modeling of pairwise relations between elements of the input (tokens): the representation of a token at a particular Transformer layer is a function of the weighted sum of the transformed representations of all the tokens in the previous layer. This feature of Transformers is known as 'context mixing' and understanding how it functions in specific model layers is crucial for tracing the overall information flow. In this talk, I will first introduce Value Zeroing, as measure of context mixing, and show that the token importance scores obtained through Value Zeroing offer better interpretations compared to previous analysis methods in terms of plausibility, faithfulness, and agreement with probing. Next, by applying Value Zeroing to models of spoken language, we will see how patterns of context mixing can reveal striking differences between the behavior of encoder-only and encoder-decoder speech Transformers."

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2024-02-29T13:00:00Z
date_end: 2024-02-29T14:00:00Z
all_day: false

# Schedule page publish date (NOT event date).
publishDate: 2024-02-26T00:00:00Z

authors: [camachocolladosj]
tags: []

# Is this a featured event? (true/false)
featured: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

# Optional filename of your slides within your event's folder or a URL.
url_slides:

url_code:
url_pdf:
url_video:

# Markdown Slides (optional).
#   Associate this event with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

**Invited Speaker:** [Hosein Mohebbi](https://hmohebbi.github.io/) (Tilburg University, Netherlands)

**Bio:**
Hosein Mohebbi is a PhD candidate at the Department of Cognitive Science and Artificial Intelligence at Tilburg University, Netherlands. He is part of the InDeep consortium project, doing research on interpretability of deep neural models for text and speech. His research has been published in leading NLP venues such as ACL, EACL, and EMNLP, where he also regularly serves as a reviewer. His contribution to the Computational Linguistics community extends to co-organizing BlackboxNLP (2023, 2024), a popular workshop focusing on analyzing and interpreting neural networks for NLP, and offering a tutorial at EACL 2024 conference.