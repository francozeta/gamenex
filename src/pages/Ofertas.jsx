import React from 'react'
import '../styles/Home.css'

export default function Ofertas() {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user);

  return (
		<>
		<header id="header">
		<nav class="nav__menu">
			<div class="logo">
				<a href="/">GAMENEX</a>
			</div>
			<ul class="nav__links">
				<li><a href="/">Inicio</a></li>
				<li><a href="/ofertas">Ofertas</a></li>
				<li><a href="">Tienda</a></li>
				<li><a href="">Ubicaciones</a></li>
				<li><a href="" class="nav__link__reg">Registrarse</a></li>
			</ul>

			<button class="btn__bars"><i class="fa-solid fa-bars"></i></button>
			<div class="nav__bg__responsive">
				<div class="nav__responsive">
					<div class="container__btn__exit">
						<button class="btn__exit"><i class="fa-solid fa-xmark"></i></button>
					</div>
					<ul class="nav__links__responsive">
						<li><a href="index.html">Inicio</a></li>
						<li><a href="ofertas.html">Ofertas</a></li>
						<li><a href="tienda.html">Tienda</a></li>
						<li><a href="ubicaciones.html">Ubicaciones</a></li>
						<li><a href="registrarse.html">Registrarse</a></li>
					</ul>
		
					<ul class="nav__links__socialmedia__responsive">
						<li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
						<li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
						<li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
						<li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
						<li><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
					</ul>
		
					<ul class="nav__link__us__responsive">
						<li><a href="nosotros.html">¿Quienes somos?</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>

	<div class="header__ofertas">
		<h2>Inicio / Ofertas de la Semana</h2>
		<select id="filtroConsola">
			<option value="todos">Todos</option>
			<option value="ps4">PlayStation 4</option>
			<option value="ps5">PlayStation 5</option>
		</select>
	</div>


	<div class="items__ofertas">
		<section class="items__container" id="juegosContainer">
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2018/06/GTA-V-247x309.webp" alt="Grand Theft Auto V GTA 5 - PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Grand Theft Auto V GTA 5 - PlayStation 4</h2>
					<span class="item__precio">S/19.99</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2019/12/CTR-Nitro-Fueled-PS4-247x309.webp" alt="Crash Team Racing Nitro-Fueled - PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Crash Team Racing Nitro-Fueled - PlayStation 4</h2>
					<span class="item__precio">S/29.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2018/11/God-of-War-PS4N-247x309.webp" alt="God Of War - PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">God Of War - PlayStation 4</h2>
					<span class="item__precio">S/15.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2020/10/Marvels-Spider-Man-Miles-Morales-PS4N-247x309.jpg" alt="Marvel’s Spider-Man: Miles Morales – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Marvel’s Spider-Man: Miles Morales – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2023/07/FC-24-PS4-247x309.webp" alt="EA SPORTS FC 24 – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">EA SPORTS FC 24 – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2023/07/FC-24-PS4-247x309.webp" alt="EA SPORTS FC 24 – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">EA SPORTS FC 24 – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2023/07/FC-24-PS4-247x309.webp" alt="EA SPORTS FC 24 – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">EA SPORTS FC 24 – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
			<a class="item__popular" href="">
				<figure>
					<img class="item__img" src="https://gamescenter.pe/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-II-PS4-510x638-1-247x309.webp" alt="Call of Duty: Modern Warfare II – Español Latino – PlayStation 4" />
				</figure>
				<div class="item__contenido">
					<h2 class="item__nombre">Call of Duty: Modern Warfare II – Español Latino – PlayStation 4</h2>
					<span class="item__precio">S/39.00</span>
				</div>
			</a>
		</section>
	</div>



























	<footer class="footer__site">
		<ul class="footer__links__socialmedia">
			<li><a href=""><i class="fa-brands fa-square-facebook"></i></a></li>
			<li><a href=""><i class="fa-brands fa-facebook-messenger"></i></a></li>
			<li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
			<li><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
			<li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
			<li><a href=""></a></li>
		</ul>
		<ul class="footer__logo__name">
			<li>GAMENEX</li>
		</ul>
		<ul class="footer__copyright">
			<li>Copyright © 2023 GameNex, Inc</li>
		</ul>
		<ul class="footer__links">
			<li><a href="ubicaciones.html">Ubicaciones</a></li>
			<li><a href="contactanos.html">Contactanos</a></li>
			<li><a href="nosotros.html">Acerca de Nosotros</a></li>
			<li><a href="politicas_tienda.html">Politicas de la Tienda</a></li>
		</ul>

	</footer>

		</>
  )
}
