const Header = () => {
  return (
    <header>
      <nav className="flex justify-between align-center mt-2 w-full flex-col gap-2">
        <div className="flex items-center justify-center ">
          <h1
            className="text-4xl text-pink-600
          hover:text-pink-800 cursor-pointer hover:scale-105 transition duration-300 ml-2
          "
          >
            Hoşgeldin Sevgilim
          </h1>
        </div>
        <div>
          <p className="text-xl text-center">
            Senin için bir yılbaşı hediyesi hazırlamak istedim. Bir yazılımcının
            yılbaşı hediyesi böyle olur işte. Umarım beğenirsin. Seninle
            birlikte bir seneyi daha bitiriyoruz. Nice birlikte senelerimize
            sevgilim. Umarım seneye Full-Stack bir yazılımcı olmuş olurum ve
            sana daha güzel bir hediye hazırlarım. Seni çok seviyorum. Lütfen
            Aşağıdaki soruyu cevapla benim için çok önemli (:
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
