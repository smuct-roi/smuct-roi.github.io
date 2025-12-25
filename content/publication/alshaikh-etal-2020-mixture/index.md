---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "A Mixture-of-Experts Model for Learning Multi-Facet Entity Embeddings"
authors:
- Rana Alshaikh
- Zied Bouraoui
- Shelan Jeawak
- schockaerts
date: 2020-12-01
doi: "10.18653/v1/2020.coling-main.449"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-02-19T23:26:58Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 28th International Conference on Computational Linguistics"
publication_short: "*COLING 2020*"

abstract: "Various methods have already been proposed for learning entity embeddings from text descriptions. Such embeddings are commonly used for inferring properties of entities, for recommendation and entity-oriented search, and for injecting background knowledge into neural architectures, among others. Entity embeddings essentially serve as a compact encoding of a similarity relation, but similarity is an inherently multi-faceted notion. By representing entities as single vectors, existing methods leave it to downstream applications to identify these different facets, and to select the most relevant ones. In this paper, we propose a model that instead learns several vectors for each entity, each of which intuitively captures a different aspect of the considered domain. We use a mixture-of-experts formulation to jointly learn these facet-specific embeddings. The individual entity embeddings are learned using a variant of the GloVe model, which has the advantage that we can easily identify which properties are modelled well in which of the learned embeddings. This is exploited by an associated gating network, which uses pre-trained word vectors to encourage the properties that are modelled by a given embedding to be semantically coherent, i.e. to encourage each of the individual embeddings to capture a meaningful facet."

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

url_pdf: https://aclanthology.org/2020.coling-main.449.pdf
url_code: https://github.com/rana-alshaikh/MoEGloVe
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
