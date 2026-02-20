export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);

		const dishes = [
			{ emoji: '🌮', name: 'Tacos al Pastor', description: 'Carne de cerdo marinada en achiote con piña, cilantro y cebolla.' },
			{ emoji: '🍣', name: 'Sushi Nigiri', description: 'Arroz de sushi prensado a mano con una rebanada de pescado fresco.' },
			{ emoji: '🍕', name: 'Pizza Margherita', description: 'Clásica italiana con salsa de tomate, mozzarella y albahaca fresca.' },
			{ emoji: '🍜', name: 'Ramen Tonkotsu', description: 'Caldo de cerdo cremoso con fideos, huevo marinado y chashu.' },
			{ emoji: '🥘', name: 'Paella Valenciana', description: 'Arroz español con azafrán, mariscos, pollo y verduras.' },
			{ emoji: '🧆', name: 'Falafel', description: 'Croquetas de garbanzo crujientes servidas con salsa tahini.' },
			{ emoji: '🍛', name: 'Curry Tikka Masala', description: 'Pollo en salsa cremosa de tomate y especias con arroz basmati.' },
			{ emoji: '🥟', name: 'Dumplings', description: 'Masa rellena de cerdo y vegetales al vapor o fritos.' },
			{ emoji: '🫔', name: 'Tamales Oaxaqueños', description: 'Masa de maíz rellena de mole negro envuelta en hoja de plátano.' },
			{ emoji: '🥩', name: 'Asado Argentino', description: 'Cortes de res a la parrilla con chimichurri y ensalada criolla.' },
			{ emoji: '🍲', name: 'Pozole Rojo', description: 'Caldo mexicano de maíz cacahuazintle con cerdo y chile guajillo.' },
			{ emoji: '🍝', name: 'Pasta Carbonara', description: 'Espagueti con guanciale, huevo, pecorino y pimienta negra.' },
		];

		switch (url.pathname) {
			case '/message':
				return new Response('¡Descubre platillos del mundo!');
			case '/random': {
				const dish = dishes[Math.floor(Math.random() * dishes.length)];
				return new Response(JSON.stringify(dish), {
					headers: { 'Content-Type': 'application/json' },
				});
			}
			default:
				return new Response('Not Found', { status: 404 });
		}
	},
};
