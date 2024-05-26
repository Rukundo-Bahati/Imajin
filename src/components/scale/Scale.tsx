interface Props {
  img: string;
}
const Scale = ({ img }: Props) => {
  return (
    <section className="section" style={{ maxWidth: "90%" }}>
      <div className="grid">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={img} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={img}
                    alt="Placeholder image"
                    style={{ borderRadius: "50%", height: "48px" }}
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Pain itself is love, for it is love. Quisque nec iaculis mauris.
              <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scale;
