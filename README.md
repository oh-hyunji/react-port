# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 포트폴리오 폴더 구조의 방향성 / EX : 블로그 형식의 포트폴리오 제작시

src/
├── assets/ # 이미지, 아이콘 등
│ └── images/ # 이미지
│ └── styles/ # 공통 스타일
├── components/ # 재사용 가능한 UI 컴포넌트
│ └── Header.tsx
│ └── PostCard.tsx
│ └── Button.tsx
│ └── MarkdownRenderer.tsx # 마크다운 렌더링 컴포넌트
├── pages/ # 각 페이지 컴포넌트
│ └── Home.tsx # 홈 페이지
│ └── PostDetail.tsx # 게시글 상세 페이지
│ └── WritePost.tsx # 게시글 작성 페이지
│ └── NotFound.tsx # 404 페이지
├── services/ # API 호출
│ └── postService.ts # 게시글 관련 API
├── types/ # 타입 정의
│ └── post.d.ts # 게시글 타입
│ └── comment.d.ts # 댓글 타입
├── utils/ # 유틸리티 함수
│ └── formatDate.ts # 날짜 형식 변환 함수
├── App.tsx # 루트 컴포넌트
├── index.tsx # 엔트리 포인트
└── routes/ # 라우팅
└── AppRouter.tsx # 라우터 설정
