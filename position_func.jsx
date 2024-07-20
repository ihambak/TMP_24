import React, { useState, useEffect } from 'react';

const PopupComponent = () => {
  const [popupPosition, setPopupPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 이벤트 발생 시 팝업 위치 재조정
      if (popupPosition.x !== null && popupPosition.y !== null) {
        const currentX = popupPosition.x + window.scrollX;
        const currentY = popupPosition.y + window.scrollY;
        setPopupPosition({ x: currentX, y: currentY });
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, [popupPosition]);

  const handleClick = (e) => {
    // 클릭한 위치의 좌표를 가져와서 상태에 저장
    const x = e.clientX;
    const y = e.clientY;
    setPopupPosition({ x, y });
  };

  const handleClose = () => {
    // 팝업 닫기 버튼 클릭 시 팝업 위치 초기화
    setPopupPosition({ x: null, y: null });
  };

  return (
    <div>
      {/* 클릭 이벤트를 설정할 요소에 onClick 핸들러를 추가 */}
      <button onClick={handleClick}>팝업 띄우기</button>
      {/* 팝업을 띄울 위치를 결정할 Overlay */}
      {popupPosition.x !== null && popupPosition.y !== null && (
        <div
          style={{
            position: 'fixed',
            top: popupPosition.y,
            left: popupPosition.x,
            border: '1px solid black',
            padding: '10px',
            backgroundColor: 'white',
          }}
        >
          {/* 팝업 내용 */}
          팝업 내용
          {/* 닫기 버튼 */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              padding: '5px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
