import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.jpg";
import five from "../assets/images/five.jpg";
import six from "../assets/images/six.jpg";
import seven from "../assets/images/seven.jpg";
import eight from "../assets/images/eight.jpg";
import nine from "../assets/images/nine.jpg";
import ten from "../assets/images/ten.jpg";
import eleven from "../assets/images/eleven.jpg";
import twelve from "../assets/images/twelve.jpg";
import thirteen from "../assets/images/thirteen.jpg";
import fourteen from "../assets/images/fourteen.jpg";
import fifteen from "../assets/images/fifteen.jpg";
import sixteen from "../assets/images/sixteen.jpg";

function Gallery() {
  return (
    <div className="images">
      <h1>IMAGE - GALLERY</h1>
      
      <div className="box">
        <img src={one} alt="Dog 1" />
        <h2>Fido</h2>
        <p>Fido is a friendly and energetic Labrador Retriever who loves to play and fetch.</p>
      </div>

      <div className="box">
        <img src={two} alt="Dog 2" />
        <h2>Buddy</h2>
        <p>Buddy is a loyal and affectionate Golden Retriever known for his gentle nature and love.</p>
      </div>

      <div className="box">
        <img src={three} alt="Dog 3" />
        <h2>Max</h2>
        <p>Max is a brave and intelligent German Shepherd, always ready to protect and serve.</p>
      </div>

      <div className="box">
        <img src={four} alt="Dog 4" />
        <h2>Bella</h2>
        <p>Bella is a curious and playful Beagle with a keen sense of smell and a love for adventure.</p>
      </div>

      <div className="box">
        <img src={five} alt="Dog 5" />
        <h2>Daisy</h2>
        <p>Daisy is a smart and elegant Poodle, known for her hypoallergenic coat and affectionate personality.</p>
      </div>

      <div className="box">
        <img src={six} alt="Dog 6" />
        <h2>Rocky</h2>
        <p>Rocky is a calm and courageous Bulldog, recognized for his distinctive wrinkled face and strong build.</p>
      </div>

      <div className="box">
        <img src={seven} alt="Dog 7" />
        <h2>Luna</h2>
        <p>Luna is a beautiful and energetic Siberian Husky, famous for her striking blue eyes and love.</p>
      </div>

      <div className="box">
        <img src={eight} alt="Dog 8" />
        <h2>Charlie</h2>
        <p>Charlie is a fun-loving and loyal Boxer, known for his playful spirit and boundless energy.</p>
      </div>

      <div className="box">
        <img src={nine} alt="Dog 9" />
        <h2>Lucy</h2>
        <p>Lucy is an affectionate and clever Border Collie, known for her intelligence and herding instincts.</p>
      </div>

      <div className="box">
        <img src={ten} alt="Dog 10" />
        <h2>Bailey</h2>
        <p>Bailey is a loving and protective Rottweiler, known for his strength and loyalty.</p>
      </div>

      <div className="box">
        <img src={eleven} alt="Dog 11" />
        <h2>Sadie</h2>
        <p>Sadie is a sweet and gentle Dachshund, known for her long body and friendly disposition.</p>
      </div>

      <div className="box">
        <img src={twelve} alt="Dog 12" />
        <h2>Oscar</h2>
        <p>Oscar is a playful and energetic Shih Tzu, known for his charming personality and beautiful coat.</p>
      </div>

      <div className="box">
        <img src={thirteen} alt="Dog 13" />
        <h2>Jack</h2>
        <p>Jack is an agile and adventurous Jack Russell Terrier, known for his intelligence and high energy.</p>
      </div>

      <div className="box">
        <img src={fourteen} alt="Dog 14" />
        <h2>Molly</h2>
        <p>Molly is a lovable and friendly Cocker Spaniel, known for her long ears and gentle nature.</p>
      </div>

      <div className="box">
        <img src={fifteen} alt="Dog 15" />
        <h2>Ruby</h2>
        <p>Ruby is a lively and affectionate Cavalier King Charles Spaniel, known for her friendly and sociable.</p>
      </div>

      <div className="box">
        <img src={sixteen} alt="Dog 16" />
        <h2>Gus</h2>
        <p>Gus is a friendly and loyal Basset Hound, known for his long ears and great sense of smell.</p>
      </div>
    </div>
  );
}

export default Gallery;
