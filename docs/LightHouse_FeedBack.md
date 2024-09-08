## Comparative Table of Lighthouse Audit Results for jQuery and React Applications:

| Criteria                           | jQuery HRnet | React HRnet | Difference |
| ---------------------------------- | ------------ | ----------- | ---------- |
| **Performance Score**              | 99           | 100         | +1         |
| **First Contentful Paint (FCP)**   | 0.7 s        | 0.4 s       | -0.3 s     |
| **Largest Contentful Paint (LCP)** | 0.8 s        | 0.5 s       | -0.3 s     |
| **Total Blocking Time (TBT)**      | 20 ms        | 60 ms       | +40 ms     |
| **Cumulative Layout Shift (CLS)**  | 0.016        | 0           | -0.016     |
| **Speed Index**                    | 0.8 s        | 0.7 s       | -0.1 s     |

### Results Analysis:

- **Overall Performance**: The React version has a slight edge with a performance score of 100 compared to 99 for jQuery.
- **First Contentful Paint (FCP)** and **Largest Contentful Paint (LCP)**: The React version is faster at displaying visible content, improving by 0.3 seconds in both metrics.
- **Total Blocking Time (TBT)**: The jQuery version has a lower Total Blocking Time, meaning it blocks interactivity for less time compared to React.
- **Cumulative Layout Shift (CLS)**: The React version achieves a better score in visual stability, with a CLS of 0 versus 0.016 for jQuery.
- **Speed Index**: The React version loads visible content slightly faster than the jQuery version.

These results indicate that the conversion to React primarily improves visual load times and layout stability, although the Total Blocking Time is slightly higher.

**FR**

## Tableau comparatif des résultats des audits Lighthouse pour les applications jQuery et React :

| Critère                            | jQuery HRnet | React HRnet | Différence |
| ---------------------------------- | ------------ | ----------- | ---------- |
| **Score de performance**           | 99           | 100         | +1         |
| **First Contentful Paint (FCP)**   | 0,7 s        | 0,4 s       | -0,3 s     |
| **Largest Contentful Paint (LCP)** | 0,8 s        | 0,5 s       | -0,3 s     |
| **Total Blocking Time (TBT)**      | 20 ms        | 60 ms       | +40 ms     |
| **Cumulative Layout Shift (CLS)**  | 0,016        | 0           | -0,016     |
| **Speed Index**                    | 0,8 s        | 0,7 s       | -0,1 s     |

### Analyse des résultats :

- **Performance globale** : La version React a un léger avantage avec un score de performance de 100 contre 99 pour jQuery.
- **First Contentful Paint (FCP)** et **Largest Contentful Paint (LCP)** : La version React est plus rapide pour afficher le contenu visible, avec une amélioration de 0,3 seconde pour les deux métriques.
- **Total Blocking Time (TBT)** : La version jQuery a un Total Blocking Time inférieur, ce qui signifie qu'elle bloque moins longtemps l'interactivité par rapport à React.
- **Cumulative Layout Shift (CLS)** : La version React obtient un meilleur score en termes de stabilité visuelle, avec un CLS de 0 contre 0,016 pour jQuery.
- **Speed Index** : La version React charge légèrement plus rapidement le contenu visible que la version jQuery.

Ces résultats montrent que la conversion à React améliore principalement les temps de chargement visuel et la stabilité de la mise en page, bien que le Total Blocking Time soit un peu plus élevé.
