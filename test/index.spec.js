import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src';

describe('Foodie Roulette worker', () => {
	describe('request for /message', () => {
		it('responds with food greeting (unit style)', async () => {
			const request = new Request('http://example.com/message');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			expect(await response.text()).toMatchInlineSnapshot(`"¡Descubre platillos del mundo!"`);
		});

		it('responds with food greeting (integration style)', async () => {
			const request = new Request('http://example.com/message');
			const response = await SELF.fetch(request);
			expect(await response.text()).toMatchInlineSnapshot(`"¡Descubre platillos del mundo!"`);
		});
	});

	describe('request for /random', () => {
		it('responds with a random dish JSON (unit style)', async () => {
			const request = new Request('http://example.com/random');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			const dish = await response.json();
			expect(dish).toHaveProperty('emoji');
			expect(dish).toHaveProperty('name');
			expect(dish).toHaveProperty('description');
		});

		it('responds with a random dish JSON (integration style)', async () => {
			const request = new Request('http://example.com/random');
			const response = await SELF.fetch(request);
			const dish = await response.json();
			expect(dish).toHaveProperty('emoji');
			expect(dish).toHaveProperty('name');
			expect(dish).toHaveProperty('description');
		});
	});
});
