import React, { Component } from 'react';
import { render } from 'react-dom';
import FeedHeader from './FeedHeader';
import Post from './Post';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: '0',
        author: 'Marcel Assis',
        date: 'há 3 min',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
        img:
          'https://media.fstatic.com/5etnab611dnAlLNxBNnTVkSrpUM=/60x60/smart/media/artists/avatar/2011/06/d68749f88de811f55561370a519d474a.jpg',
      },
      {
        id: '1',
        author: 'Fernanda Lattario',
        date: 'há 10 min',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
        img: 'https://static.pelando.com.br/live/users/user_small_avatar/default/246841_1.jpg',
      },
      {
        id: '2',
        author: 'Marcelo Faria',
        date: 'há 20 min',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
        img:
          'https://media.fstatic.com/fNa5KGX2QHgpVYJw9nlOt8ZO2Hs=/60x60/smart/media/artists/avatar/2010/02/89449e42d3e8452bb1ab35ba53070477.jpg',
      },
      {
        id: '3',
        author: 'Victor Bergara',
        date: 'há 30 min',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
        img:
          'https://media.fstatic.com/eVhZkc7jivrrYdRG6tJ612EfJEs=/60x60/smart/media/artists/avatar/2010/06/56280aee7241ecd526c38d12a8b6982f.jpg',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <FeedHeader />
        {posts.map(post => <Post data={post} key={post.id} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
