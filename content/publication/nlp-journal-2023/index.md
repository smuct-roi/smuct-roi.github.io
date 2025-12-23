---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Leveraging contextual representations with BiLSTM-based regressor for lexical complexity prediction"
authors:
- Abdul Aziz 
- Md. Akram Hossain
- Abu Nowshed Chy 
- Md Zia Ullah 
- Masaki Aono
author_notes:
- "Equal contribution"
- "Equal contribution"

date: 2023-11-03
doi: "https://doi.org/10.1016/j.nlp.2023.100039"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-11-03T23:41:36Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Elsevier Natural Language Processing Journal, Vol. 05, No. 100039, 2023"
publication_short: "*Elsevier NLP 2023*"
# **[On review]**
abstract: "Lexical complexity prediction (LCP) determines the complexity level of words or phrases in a sentence. LCP has a significant impact on the enhancement of language translations, readability assessment, and text generation. However, the domain-specific technical word, the complex grammatical structure, the polysemy problem, the inter-word relationship, and dependencies make it challenging to determine the complexity of words or phrases. In this paper, we propose an integrated transformer regressor model named ITRM-LCP to estimate the lexical complexity of words and phrases where diverse contextual features are extracted from various transformer models. The transformer models are fine-tuned using the text-pair data. Then, a bidirectional LSTM-based regressor module is plugged on top of each transformer to learn the long-term dependencies and estimate the complexity scores. The predicted scores of each module are then aggregated to determine the final complexity score. We assess our proposed model using two benchmark datasets from shared tasks. Experimental findings demonstrate that our ITRM-LCP model obtains 10.2% and 8.2% improvement on the news and Wikipedia corpus of the CWI-2018 dataset, compared to the top-performing systems (DAT, CAMB, and TMU). Additionally, our ITRM-LCP model surpasses state-of-the-art LCP systems (DeepBlueAI, JUST-BLUE) by 1.5% and 1.34% for single and multi-word LCP tasks defined in the SemEval LCP-2021 task."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://www.sciencedirect.com/science/article/pii/S2949719123000365/pdfft?md5=502faaa940a69ced559675ed79aff467&pid=1-s2.0-S2949719123000365-main.pdf
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
