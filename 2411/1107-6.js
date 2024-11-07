import { useState } from 'react';

const onDragEnd = (fromIndex, toIndex, setHeaderNamesReactNodeList) => {
  setHeaderNamesReactNodeList((prevState) => {
    const data = prevState ? [...prevState] : [];
    const item = data.splice(fromIndex - 1, 1)[0];
    data.splice(toIndex - 1, 0, item);
    return data;
  });
};

// 컴포넌트 내부
const MyComponent = () => {
  const [headerNamesReactNodeList, setHeaderNamesReactNodeList] = useState([]);

  // 이벤트 핸들러에서 onDragEnd 호출
  const handleDragEnd = (fromIndex, toIndex) => {
    onDragEnd(fromIndex, toIndex, setHeaderNamesReactNodeList);
  };

  return (
    <div>
      {/* Drag and drop 요소 렌더링 */}
    </div>
  );
};