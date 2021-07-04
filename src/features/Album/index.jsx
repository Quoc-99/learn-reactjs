import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
	const albumList = [
		{
			id: 1,
			name: 'Top 100 Nhạc Hàn Quốc Hay Nhất',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg',
		},
		{
			id: 2,
			name: 'Top 100 Nhạc Trẻ Hay Nhất',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
		},
		{
			id: 3,
			name: 'Top 100 Âu Mỹ Hay Nhất',
			thumbnailUrl:
				'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/c/e/7/dce7d09905fd4a7a281125ca2a34fa3a.jpg',
		},
	];

	return (
		<div>
			<h2>Có thể bạn sẽ thích</h2>
			<AlbumList albumList={albumList} />
		</div>
	);
}

export default AlbumFeature;
