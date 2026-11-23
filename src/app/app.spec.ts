import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('should create the app', () => {
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('applies the yearly discount', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.yearly.set(true);
    expect(app.price(app.plans[1])).toBe(10);
  });
});
