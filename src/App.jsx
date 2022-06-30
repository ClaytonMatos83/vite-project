import { Header } from './components/Header';
import {Post} from './Post';

import './global.css';

export function App() {
  return (
    <div> 
      <Header/>

      <Post 
        author="Clayton Matos" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga illo repudiandae, consequuntur commodi dolorum quod debitis eveniet nemo explicabo optio quibusdam ipsa aperiam suscipit adipisci vitae maiores porro ex!"
      />
      <Post
        author="Pedro Matos"
        content="Um novo post"
      />
    </div>
    )
}

