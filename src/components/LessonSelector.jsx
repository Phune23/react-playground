import React from 'react';
import {
  SelectorContainer,
  SelectorTitle,
  TopicList,
  TopicButton,
  DescriptionBox
} from '../styles/LessonSelectorStyles';

const LessonSelector = ({ lessons, activeLesson, onSelectLesson }) => {
  return (
    <SelectorContainer>
      <SelectorTitle>Chọn chủ đề học</SelectorTitle>
      <TopicList>
        {lessons.map(lesson => (
          <TopicButton 
            key={lesson.id} 
            active={activeLesson?.id === lesson.id}
            onClick={() => onSelectLesson(lesson)}
          >
            {lesson.title}
          </TopicButton>
        ))}
      </TopicList>
      
      <DescriptionBox>
        {activeLesson?.description || "Chọn một bài học để bắt đầu."}
      </DescriptionBox>
    </SelectorContainer>
  );
};

export default LessonSelector;