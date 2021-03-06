import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import _history from '../history/_history.js'

import MenuBar from './menu-bar.jsx'
import ImageGallery from 'react-image-gallery'
import AirMap from './air-map.jsx'
import OrderCart from './order-cart.jsx'
import MyPage from './my-page.jsx'
import TrackDelivery from './track-delivery.jsx'
import NewsList from './news-list.jsx'
import Footer from './footer.jsx'

import '../stylesheets/Home.css'
import '../stylesheets/image-gallery.css'

import mask from '../../public/images/mask.svg'
import chat from '../../public/images/chat.svg'
import conversation from '../../public/images/conversation.svg'
import speaker from '../../public/images/speaker.svg'
import regularDelivery from '../../public/images/regular-delivery.png' 

class Home extends React.Component {
	
	handleRouteToFAQ(){
		location.href = '/faq'
	}

	handleRouteToNotice(){
		location.href = '/notice'
	}
	render(){

		const { homeState } = this.props
				
		return(
			<React.Fragment>
				<MenuBar />
				<AirMap />
				<OrderCart />
				<MyPage />
				<TrackDelivery />
				<div className="Home-Hot-Menus">

					<div className="Home-Hot-Menus__Item">
						<div className="Menus_Item-ImageBox">
							<img className="ImageBox__Img" src={mask} alt="mask"/>
						</div>
						<div className="Menus_Item-ContentBox">

							<div className="ContentBox__Item-Header">
								<h4>인기 마스크 제품</h4>
							</div>
							<div className="ContentBox__Item-Divider"></div>
							<div className="ContentBox__Item-Text">
								<p>사업장 고객도, 개인 고객도 가벼운 가격에 숨쉬어 보고 결정할 수 있는 인기 제품들!</p>
							</div>

						</div>
					</div>

					<div className="Home-Hot-Menus__Item">
						<div className="Menus_Item-ImageBox">
							<img className="ImageBox__Img" src={chat} alt="chat"/>
						</div>
						<div className="Menus_Item-ContentBox">
							<div className="ContentBox__Item-Header">
								<h4>고객 후기 게시판</h4>
							</div>
							<div className="ContentBox__Item-Divider"></div>
							<div className="ContentBox__Item-Text">
								<p>코로 먼저 숨쉬어 보는 마스크의 맛! 15,000개 이상의 실제 후기가 보여드립니다!</p>
							</div>
						</div>
					</div>

					<div className="Home-Hot-Menus__Item">
						<div className="Menus_Item-ImageBox">
							<img className="ImageBox__Img" src={conversation} alt="conversation"/>
						</div>
						<div onClick={this.handleRouteToFAQ} className="Menus_Item-ContentBox">
							
							<div className="ContentBox__Item-Header">
								<h4>자주 묻는 질문 모음</h4>
							</div>
							<div className="ContentBox__Item-Divider"></div>
							<div className="ContentBox__Item-Text">
								<p>배송, 제품 추천, 안내 등 지금 궁금하신 내용은 대부분 여기 있습니다!</p>
							</div>

						</div>	
					</div>

					<div className="Home-Hot-Menus__Item">
						<div className="Menus_Item-ImageBox">
							<img className="ImageBox__Img" src={speaker} alt="speaker"/>
						</div>
						<div className="Menus_Item-ContentBox">
							<div onClick={this.handleRouteToNotice} className="ContentBox__Item-Header">
								<h4>공지사항 게시판</h4>
							</div>
							<div className="ContentBox__Item-Divider"></div>
							<div className="ContentBox__Item-Text">
								<p>마스크샵의 새 소식을 가장먼저 접할 수 있는 공지사항 게시판입니다!</p>
							</div>
						</div>
					</div>

				</div>

				<div className="Home-Ads-Section">
					<div className="Section__Item">
						<img className='banner-regular-delivery' src={regularDelivery} width='200' />
						<span className='regular-delivery-text'>
							<div className='regular-delivery-text-1' i18n-content='REGULAR_SERVICE_TITLE'></div>
							<div className='regular-delivery-text-2' i18n-content='REGULAR_SERVICE_DES'></div>
							<button className='regular-delivery-btn' i18n-content='REGULAR_SERVICE_BTN'></button>
						</span>						
					</div>

					<div className="Section__Item">
						<div className="Section__Item__Item">
							<div className="Section__Item__Item__Item">
								<img src='#' alt=""/>
								오늘의 인기 아이템
							</div>
							<div className="Section__Item__Item__Item">
								<img src='#' alt=""/>
								추천 아이템
							</div>
						</div>
						<div className="Section__Item__Item">
							<img src='#' alt=""/>
							<NewsList />
						</div>
					</div>
				</div>

				<div className="Home-Recommend-Header">
					<h4>마스크샵 추천 아이템</h4>
					<h4>RECOMMENDED ITEMS</h4>
				</div>
				
				<div className="Home-Recommend-Items-Container">
					{ProductCard(homeState.recommendedItems)}
				</div>
				<Footer />
			</React.Fragment>

		)
	}

}

const ProductCard = props => {
	const result = props.map((el,index) => (
		<div className="Home-Recommend-Container__Item" key={index}>

			<div className="Container__Item-ImageBox">
				<img src={el.src} />
			</div>

			<div className="Container__Item-ProductTextBox">
				<span className="ProductTextBox__Text">
					{el.product}
				</span>
			</div>

			<hr className="Container__Item-Divider"/>

			<div className="Container__Item-DescriptionTextBox">
				<span className="DescriptionTextBox__Text">
					{el.description}
				</span>
			</div>

			<div className="Container__Item-Hover">
				
			</div>
		</div>
	))

	return result
}



const mapStateToProps = state => (
	
	{
		homeState : state.homeState
	}

)

Home = withRouter(connect(mapStateToProps,null)(Home))

export default Home
