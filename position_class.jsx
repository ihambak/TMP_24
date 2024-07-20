import React, { Component } from 'react';

interface PopupPosition {
  x: number | null;
  y: number | null;
}

class PopupComponent extends Component<{}, PopupPosition> {
  // 초기 상태 설정
  state: PopupPosition = {
    x: null,
    y: null,
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // 스크롤 이벤트 핸들러
  handleScroll = () => {
    const { x, y } = this.state;
    if (x !== null && y !== null) {
      const currentX = x + window.scrollX;
      const currentY = y + window.scrollY;
      this.setState({ x: currentX, y: currentY });
    }
  };

  // 클릭 이벤트 핸들러
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    this.setState({ x, y });
  };

  // 닫기 버튼 클릭 이벤트 핸들러
  handleClose = () => {
    this.setState({ x: null, y: null });
  };

  render() {
    const { x, y } = this.state;

    return (
      <div>
        {/* 클릭 이벤트를 설정할 요소에 onClick 핸들러를 추가 */}
        <button onClick={this.handleClick}>팝업 띄우기</button>
        {/* 팝업을 띄울 위치를 결정할 Overlay */}
        {x !== null && y !== null && (
          <div
            style={{
              position: 'fixed',
              top: y,
              left: x,
              border: '1px solid black',
              padding: '10px',
              backgroundColor: 'white',
            }}
          >
            {/* 팝업 내용 */}
            팝업 내용
            {/* 닫기 버튼 */}
            <button
              onClick={this.handleClose}
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
  }
}

export default PopupComponent;
