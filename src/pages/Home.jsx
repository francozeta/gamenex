import React from 'react'
import '../styles/Home.css'

export default function HomePage() {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user);


	const handleLogout = () => {
		localStorage.clear();
		window.location.href = '/';
	}
  return (
		<>
	<header id="header">
		<nav className="nav__menu">
			<div className="logo">
				<a href="/">GAMENEX</a>
			</div>
			<ul className="nav__links">
				<li><a href="/">Inicio</a></li>
				<li><a href="/ofertas">Ofertas</a></li>
				<li><a href="">Tienda</a></li>
				<li><a href="">Ubicaciones</a></li>
				<li>{user.nameClient}</li>
				<li><button onClick={handleLogout}>Cerrar Sesion</button></li>
			</ul>

			<button className="btn__bars"><i className="fa-solid fa-bars"></i></button>
			<div className="nav__bg__responsive">
				<div className="nav__responsive">
					<div className="container__btn__exit">
						<button className="btn__exit"><i className="fa-solid fa-xmark"></i></button>
					</div>
					<ul className="nav__links__responsive">
						<li><a href="index.html">Inicio</a></li>
						<li><a href="ofertas.html">Ofertas</a></li>
						<li><a href="tienda.html">Tienda</a></li>
						<li><a href="ubicaciones.html">Ubicaciones</a></li>
						<li><a href="registrarse.html">Registrarse</a></li>
					</ul>
		
					<ul className="nav__links__socialmedia__responsive">
						<li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
						<li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
						<li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
						<li><a href=""><i className="fa-brands fa-youtube"></i></a></li>
						<li><a href=""><i className="fa-brands fa-tiktok"></i></a></li>
					</ul>
		
					<ul className="nav__link__us__responsive">
						<li><a href="nosotros.html">¿Quienes somos?</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>

	<div className="container__carousel">
		<div className="carruseles" id="slider">
			<section className="slider__section">
				<img src="https://gamescenter.pe/wp-content/uploads/2023/11/Fortnite-Temporada-origenes-Portada-Web-scaled.webp" alt=""/>
			</section>
			<section className="slider__section">
				<img src="https://gamescenter.pe/wp-content/uploads/2023/10/Portada-web-Spiderman-2-scaled.webp" alt=""/>
			</section>
			<section className="slider__section">
				<img src="https://scontent.flim1-2.fna.fbcdn.net/v/t39.30808-6/401849465_308323428711472_6934984811517625439_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3j_WMYMkbo0AX9QFPO5&_nc_ht=scontent.flim1-2.fna&oh=00_AfD1jvbIogMU-4FTO9Xut3NneMN0r-IG3SmlOU4_YFUb6A&oe=655C6A35" alt=""/>
			</section>
		</div>
		<div className="btn__left"><i className="fa-solid fa-chevron-left"></i></div>
		<div className="btn__right"><i className="fa-solid fa-chevron-right"></i></div>
	</div>

	<section className="recargas__container">
		<a href="" className="recargas__link">
			<img src="https://gamescenter.pe/wp-content/uploads/2023/05/PS-Store-Plus-Network-Levels-2x.webp" alt=""/>
		</a>
		<a href="" className="recargas__link">
			<img src="https://gamescenter.pe/wp-content/uploads/2023/05/Nintendo-eShopx.webp" alt=""/>
		</a>
	</section>
	
	<div className="items__populares__container">
		<section className="encabezado__vertodo">
			<h1><i className="fa-solid fa-circle-plus"></i>MAS VENDIDOS</h1><a href="">Ver todo</a>
		</section>
		<section className="items__container">
			<a className="item__popular" href="">
				<figure>
					<img className="item__img" src="https://gamescenter.pe/wp-content/uploads/2018/06/GTA-V-247x309.webp" alt="Grand Theft Auto V GTA 5 - PlayStation 4" />
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Grand Theft Auto V GTA 5 - PlayStation 4</h2>
					<span className="item__precio">S/19.99</span>
				</div>
			</a>
			<a className="item__popular" href="">
				<figure>
					<img className="item__img" src="https://gamescenter.pe/wp-content/uploads/2019/12/CTR-Nitro-Fueled-PS4-247x309.webp" alt="Crash Team Racing Nitro-Fueled - PlayStation 4" />
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Crash Team Racing Nitro-Fueled - PlayStation 4</h2>
					<span className="item__precio">S/29.00</span>
				</div>
			</a>
			<a className="item__popular" href="">
				<figure>
					<img className="item__img" src="https://gamescenter.pe/wp-content/uploads/2018/11/God-of-War-PS4N-247x309.webp" alt="God Of War - PlayStation 4" />
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">God Of War - PlayStation 4</h2>
					<span className="item__precio">S/15.00</span>
				</div>
			</a>
			<a className="item__popular" href="">
				<figure>
					<img className="item__img" src="https://gamescenter.pe/wp-content/uploads/2020/10/Marvels-Spider-Man-Miles-Morales-PS4N-247x309.jpg" alt="Marvel’s Spider-Man: Miles Morales – PlayStation 4" />
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Marvel’s Spider-Man: Miles Morales – PlayStation 4</h2>
					<span className="item__precio">S/39.00</span>
				</div>
			</a>
			<a className="item__popular" href="">
				<figure>
					<img className="item__img" src="https://gamescenter.pe/wp-content/uploads/2023/07/FC-24-PS4-247x309.webp" alt="EA SPORTS FC 24 – PlayStation 4" />
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">EA SPORTS FC 24 – PlayStation 4</h2>
					<span className="item__precio">S/39.00</span>
				</div>
			</a>
			<a className="item__popular" href="">
				<figure>
					<img className="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span className="item__precio">S/39.00</span>
				</div>
			</a>
		</section>
	</div>


	<div className="items__juegos__digitales__ps4">
		<section className="encabezado__vertodo">
			<h1><i className="fa-brands fa-playstation"></i>JUEGOS DIGITALES PS4</h1><a href="">Ver todo</a>
		</section>

		<section className="items__container">
			<a href="" className="item__ps4">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2018/04/Naruto-Storm-Legacy-PS4-247x309.webp" alt="Naruto Shippuden: Ultimate Ninja Storm Legacy – PlayStation 4" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Naruto Shippuden: Ultimate Ninja Storm Legacy – PlayStation 4</h2>
					<span className="item__precio">S/19.00</span>
				</div>
			</a>
			<a href="" className="item__ps4">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2022/01/Tekken-7-Definitive-Edition-PS4-247x309.jpg" alt="TEKKEN 7 – Definitive Edition – PlayStation 4" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">TEKKEN 7 – Definitive Edition – PlayStation 4</h2>
					<span className="item__precio">S/39.00</span>
				</div>
			</a>
			<a href="" className="item__ps4">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2023/04/Red-Dead-Redemption-2-Ultimate-Edition-PS4-247x309.jpg" alt="Red Dead Redemption 2: Ultimate Edition – PlayStation 4" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Red Dead Redemption 2: Ultimate Edition – PlayStation 4</h2>
					<span className="item__precio">S/29.00</span>
				</div>
			</a>
			<a href="" className="item__ps4">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2019/06/Watch-Dogs-Legion-1-247x309.jpg" alt="Watch Dogs: Legion – PlayStation 4" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Watch Dogs: Legion – PlayStation 4</h2>
					<span className="item__precio">S/15.00</span>
				</div>
			</a>
			<a href="" className="item__ps4">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2022/10/Resident-Evil-Village-Gold-Edition-PS4-247x309.jpg" alt="Resident Evil Village Gold Edition – PlayStation 4" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Resident Evil Village Gold Edition – PlayStation 4</h2>
					<span className="item__precio">S/49.00</span>
				</div>
			</a>
			<a href="" className="item__ps4">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2023/10/METAL-GEAR-SOLID-MASTER-COLLECTION-Vol.1-PS4-247x309.webp" alt="METAL GEAR SOLID: MASTER COLLECTION Vol.1 – PlayStation 4" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">METAL GEAR SOLID: MASTER COLLECTION Vol.1 – PlayStation 4</h2>
					<span className="item__precio">S/89.00</span>
				</div>
			</a>
		</section>
	</div>


	<div className="items__juegos__digitales__ps5">
		<section className="encabezado__vertodo">
			<h1><i className="fa-brands fa-playstation"></i>JUEGOS DIGITALES PS5</h1><a href="">Ver todo</a>
		</section>
		
		<section className="items__container">
			<a href="" className="item__ps5">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2023/05/Mortal-Kombat-1-PS5-247x309.jpg" alt="" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Mortal Kombat 1 – PlayStation 5</h2>
					<span className="item__precio">S/99.00</span>
				</div>
			</a>
			<a href="" className="item__ps5">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2022/01/Marvels-Spider-Man-2-PS5-247x309.webp" alt="Marvel’s Spider-Man 2 – PlayStation 5" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Marvel’s Spider-Man 2 – PlayStation 5</h2>
					<span className="item__precio">S/99.00</span>
				</div>
			</a>
			<a href="" className="item__ps5">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2021/03/GTA-V-NExt-Gen-247x309.jpg" alt="GTA 5 – Grand Theft Auto V: Nueva Generación – PlayStation 5" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">GTA 5 – Grand Theft Auto V: Nueva Generación – PlayStation 5</h2>
					<span className="item__precio">S/99.00</span>
				</div>
			</a>
			<a href="" className="item__ps5">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2022/02/God-of-War-Ragnarok-PS5N-247x309.jpg" alt="God of War Ragnarok – PlayStation 5" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">God of War Ragnarok – PlayStation 5</h2>
					<span className="item__precio">S/99.00</span>
				</div>
			</a>
			<a href="" className="item__ps5">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2023/07/FC-24-PS5-247x309.webp" alt="EA SPORTS FC 24 – PlayStation 5" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">EA SPORTS FC 24 – PlayStation 5</h2>
					<span className="item__precio">S/99.00</span>
				</div>
			</a>
			<a href="" className="item__ps5">
				<figure>
					<img src="https://gamescenter.pe/wp-content/uploads/2021/04/Crash-Team-Racing-Nitro-Fueled-PS5-247x309.jpg" alt="Crash Team Racing Nitro-Fueled – PlayStation 5" className="item__img"/>
				</figure>
				<div className="item__contenido">
					<h2 className="item__nombre">Crash Team Racing Nitro-Fueled – PlayStation 5</h2>
					<span className="item__precio">S/99.00</span>
				</div>
			</a>
		</section>
	</div>

		<footer className="footer__site">
		<ul className="footer__links__socialmedia">
			<li><a href=""><i className="fa-brands fa-square-facebook"></i></a></li>
			<li><a href=""><i className="fa-brands fa-facebook-messenger"></i></a></li>
			<li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
			<li><a href=""><i className="fa-brands fa-tiktok"></i></a></li>
			<li><a href=""><i className="fa-brands fa-youtube"></i></a></li>
			<li><a href=""></a></li>
		</ul>
		<ul className="footer__logo__name">
			<li>GAMENEX</li>
		</ul>
		<ul className="footer__copyright">
			<li>Copyright © 2023 GameNex, Inc</li>
		</ul>
		<ul className="footer__links">
			<li><a href="ubicaciones.html">Ubicaciones</a></li>
			<li><a href="contactanos.html">Contactanos</a></li>
			<li><a href="nosotros.html">Acerca de Nosotros</a></li>
			<li><a href="politicas_tienda.html">Politicas de la Tienda</a></li>
		</ul>

	</footer>
		</>
  )
}
