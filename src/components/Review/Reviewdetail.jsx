import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/reviewDetail.module.css'


//๐ reviewPage์์ item์ ์ด๋ฏธ์ง๋ฅผ ํด๋ฆญํ์ ๋ ์ด๋ํ๋ ์ปดํฌ๋ํธ
//Reivew์ ์ ์ฒด์ ์ธ ๋ด์ฉ์ ์ถ๋ ฅ

const ReviewDetail = ({deleteReview}) => {
    const location = useLocation();
    const navigation = useNavigate();
    const reviewState = location.state.review;

    const goRevise = (review) =>{
        navigation(`/review/revise/${review.id}`, {state : {review}})
    }
    
    return (
        <section>
            <div className={styles.header}> 
                <div className={styles.userInfo}>
                    <img src={reviewState.profileIMG} alt="profile" />
                    <h3>{reviewState.nickname}</h3>
                </div>
                <div className={styles.searchInput}>
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
            
            <div className={styles.content}>
                <img src={reviewState.reviewIMG} alt="review" />
                <div className={styles.container}>
                    <select name="" id="">
                        <option value="">์จ๊ธฐ๊ธฐ</option>
                        <option value="">์ ๊ณ ํ๊ธฐ</option>
                        <option value="">์ญ์ </option>
                        <option value="">์์ </option>
                    </select>
                    <div className={styles.title}>
                        <h3>{reviewState.reviewTitle}</h3>
                        <p>{reviewState.reviewHashtags}</p>
                    </div>
                    <p className={styles.description}>{reviewState.reviewDescription}</p>
                </div>
                
            </div>

            <hr />
            <div className={styles.icon_container}>
                <div className={styles.icon_container_left}>
                    <p className={styles.heart}>๐</p>
                    <p className={styles.comment}>๐</p>
                </div>
                <div className={styles.icon_container_right}>
                    <button onClick={()=>goRevise(reviewState)}>์์ </button>
                    <button onClick={()=>deleteReview(reviewState)}>์ญ์ </button>
                </div>
            </div>

            <textarea className={styles.comment_write} name="comment" id="" cols="30" rows="10"></textarea>
        </section>
    );
};

export default ReviewDetail;