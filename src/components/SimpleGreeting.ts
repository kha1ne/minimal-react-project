import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * A simple greeting web component built with Lit.
 * Demonstrates basic property binding and styling.
 *
 * @element simple-greeting
 *
 * @attr {string} name - The name to greet
 *
 * @example
 * ```html
 * <simple-greeting name="World"></simple-greeting>
 * ```
 */
@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      border: 2px solid #646cff;
      border-radius: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
      margin: 1rem 0;
    }

    .greeting {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
    }

    .subtitle {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-top: 0.5rem;
    }
  `;

  @property({ type: String })
  name = "World";

  render() {
    return html`
      <p class="greeting">Hello, ${this.name}! 👋</p>
      <p class="subtitle">This is a Lit web component</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-greeting": SimpleGreeting;
  }
}
