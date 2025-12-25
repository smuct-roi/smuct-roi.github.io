---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Seminar: \"NOLIMA: Long-Context Evaluation Beyond Literal Matching\""
# event:
# event_url:
location: Abacws
# address:
#   street:
#   city:
#   region:
#   postcode:
#   country:
summary: Talk by [Ali Modaressi](https://www.amodarressi.com/) (LMU Munich)
abstract: "Recent large language models (LLMs) support long contexts ranging from 128K to 1M tokens. A popular method for evaluating these capabilities is the needle-in-a-haystack (NIAH) test, which involves retrieving a \"needle\" (relevant information) from a \"haystack\" (long irrelevant context). Extensions of this approach include increasing distractors, fact chaining, and in-context reasoning. However, in these benchmarks, models can exploit existing literal matches between the needle and haystack to simplify the task. To address this, we introduce NoLiMa, a benchmark extending NIAH with a carefully designed needle set, where questions and needles have minimal lexical overlap, requiring models to infer latent associations to locate the needle within the haystack. We evaluate 12 popular LLMs that claim to support contexts of at least 128K tokens. While they perform well in short contexts (<1K), performance degrades significantly as context length increases. At 32K, for instance, 10 models drop below 50% of their strong short-length baselines. Even GPT-4o, one of the top-performing exceptions, experiences a reduction from an almost-perfect baseline of 99.3% to 69.7%. Our analysis suggests these declines stem from the increased difficulty the attention mechanism faces in longer contexts when literal matches are absent, making it harder to retrieve relevant information."

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2025-06-19T13:00:00Z
date_end: 2025-06-19T14:00:00Z
all_day: false

# Schedule page publish date (NOT event date).
publishDate: 2025-06-17T00:00:00Z

authors: [ousidhoumn]
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

**Invited Speaker:** [Ali Modaressi](https://www.amodarressi.com/) (LMU Munich)

**Bio:**
I am a third-year PhD student at the Center for Information and Language Processing (CIS) at LMU Munich, working under the supervision of Prof. Hinrich Schütze. My current research focuses on memory-augmented large language models, and, more broadly, on long-context language modeling. Closely related, I have also worked on interactive language generation and information extraction. My NLP journey began during my MSc, supervised by Mohammad Taher Pilehvar, where I worked on explainability methods and interpretability of pre-trained language models--an area that remains relevant to my current research, particularly in analyzing retrieval models and knowledge probing.
