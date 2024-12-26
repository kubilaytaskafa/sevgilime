import galeri1 from "../images/galeri1.jpg";
import galeri2 from "../images/galeri2.jpg";
import galeri3 from "../images/galeri3.jpg";
import galeri4 from "../images/galeri4.jpg";
import galeri5 from "../images/galeri5.jpg";
const Gallery = () => {
  const images = [galeri1, galeri2, galeri3, galeri4, galeri5];

  return (
    <section className="p-4 mt-4">
      <h2 className="text-xl mb-4 text-center">
        Evet Sevgilim 4 yılımız böyle geçti...
      </h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Fotoğraf ${index + 1}`}
              className="w-80 h-96"
            />
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-2xl text-center mt-4 font-bold text-pink-600">
          Daha Nice Güzel Anılar biriktireceğiz sevgilim. Seni çok seviyorum
          birlikte nice güzel Yıllara
        </h1>
      </div>
    </section>
  );
};

export default Gallery;
