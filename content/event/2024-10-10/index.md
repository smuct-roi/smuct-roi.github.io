---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Seminar: \"Natural Experiments in NLP and Where to Find Them\""
# event:
# event_url:
location: Abacws
# address:
#   street:
#   city:
#   region:
#   postcode:
#   country:
summary: Talk by [Pietro Lesci](https://pietrolesci.github.io/) (University of Cambridge)
abstract: "In training language models, training choices—such as the random seed for data ordering or the token vocabulary size—significantly influence model behaviour. Answering counterfactual questions like \"How would the model perform if this instance were excluded from training?\" is computationally expensive, as it requires re-training the model. Once these training configurations are set, they become fixed, creating a \"natural experiment\" where modifying the experimental conditions incurs high computational costs. Using econometric techniques to estimate causal effects from observational studies enables us to analyse the impact of these choices without requiring full experimental control or repeated model training. In this talk, I will present our paper, *Causal Estimation of Memorisation Profiles* (Best Paper Award at ACL 2024), which introduces a novel method based on the difference-in-differences technique from econometrics to estimate memorisation without requiring model re-training. I will also discuss preliminary results from ongoing work that applies the regression discontinuity design to estimate the causal effect of selecting a specific vocabulary size."

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2024-10-10T13:00:00Z
date_end: 2024-10-10T14:00:00Z
all_day: false

# Schedule page publish date (NOT event date).
publishDate: 2024-10-04T00:00:00Z

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

**Invited Speaker:** [Pietro Lesci](https://pietrolesci.github.io/) (University of Cambridge)

**Bio:**
Pietro Lesci is a PhD student in Natural Language Processing at the University of Cambridge, working with Professor Andreas Vlachos. His research explores the causal effects of training choices on language models, focusing on memorisation, shortcut learning, and tokenisation. His work has been presented at major NLP conferences like ACL and NAACL. He received a Best Paper Award at ACL 2024 and funding from the Translated Imminent Research Grant for his research contributions. Pietro’s experience spans academia and industry, including roles at Amazon AWS AI Labs, Bain & Company, and Bocconi University. He holds an MSc in Economic and Social Sciences from Bocconi University.
