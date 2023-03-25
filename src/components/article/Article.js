import "./Article.css";

const Article = ({ photo }) => {
  return (
    <article key={photo.id} onClick={() => window.open(photo.links.html)}>
      <img src={photo.urls.regular} alt={photo.id} />
      <p>{[photo.description, photo.alt_description].join(" - ")}</p>
    </article>
  );
};

export default Article;
