import { html } from 'lit';
import { customElement,state } from 'lit/decorators.js';
import { View } from '../../views/view.js';
import {TodoEndPoint} from "Frontend/generated/endpoints";


@customElement('todo-view')
export class TodoView extends View {
  @state()
  private text?:string='default';

  render() {
    this.loadByDefault();
    return html`<div>
      <img style="width: 200px;" src="images/empty-plant.png" />
      <h2 class="mt-xl mb-m">This place intentionally left empty-${this.text}</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>
    </div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'flex',
      'flex-col',
      'h-full',
      'items-center',
      'justify-center',
      'p-l',
      'text-center',
      'box-border'
    );
  }
  async loadByDefault(){
    this.text=await TodoEndPoint.getTitle();
  }
}