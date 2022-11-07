# **📖 2주차 과제 2 - Best Practice**

### **과제목적 :** 광고 현황 대시보드 및 광고 관리 서비스 **구축 후 Best Pratice 산출**

> 기간 :2022년 11월 5일(토) - 2022년 11월 7일(월)
> 

**📎[배포링크 바로가기](http://ad-management-service.s3-website.ap-northeast-2.amazonaws.com/dashboard)**

# **👨‍👩‍👧‍👦 Members**

| 최승진<br/>(팀장) | 임준홍<br/>(부팀장) | 문도연<br/>(서기) | 최원오<br/>(부서기) | 소윤호<br/>(부서기) | 선민경<br/>(팀원) | 곽현<br/>(팀원) | 이유진<br/>(팀원) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> |
| yondo123 | tesseractjh | Moondoyeon | choi1five | younhoso | seonsy44 | kwakhyun | 2ujin |

# **🖥 Demo**
![Nov-07-2022 09-00-30](https://user-images.githubusercontent.com/42020919/200202905-698f5fe6-d614-44cb-ad02-9554c060b0b1.gif)

# **⚡️ Skills**

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-2F74C0.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

![axios](https://camo.githubusercontent.com/23392fa4fc3ffb6ade29cba7aaffa7741daeb97012c70a062cf2370187d6519e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732d4646434132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6178696f73266c6f676f436f6c6f723d7768697465)

![react-router-dom](https://camo.githubusercontent.com/59772064d7f01d32dfc280518690c95d858dce068a58be142b2ac003ef31642c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163745f726f757465725f646f6d2d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374726f75746572266c6f676f436f6c6f723d7768697465)

</div>

# **🚀 기능요구사항**

- 사이드바
    - 서비스 추가 버튼
- 대시보드
    - 통합광고현황
- 광고관리
    - 광고 표시 및 수정하기

# 📦 파일 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜PageTitle.tsx
 ┃ ┃ ┣ 📜SideBar.tsx
 ┃ ┃ ┣ 📜SideBarMenu.tsx
 ┃ ┃ ┣ 📜TopBar.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Container.tsx
 ┃ ┣ 📜DatePicker.tsx
 ┃ ┣ 📜DropdownDouble.tsx
 ┃ ┣ 📜DropdownLarge.tsx
 ┃ ┣ 📜DropdownSmall.tsx
 ┃ ┣ 📜OptionLarge.tsx
 ┃ ┣ 📜OptionSmall.tsx
 ┃ ┗ 📜OptionsRaw.tsx
 ┣ 📂context
 ┃ ┣ 📜AdsContext.tsx
 ┃ ┗ 📜TrendContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAdCard.ts
 ┃ ┣ 📜useChart.ts
 ┃ ┣ 📜useDatePicker.ts
 ┃ ┣ 📜useDropdown.ts
 ┃ ┣ 📜useDropdownDouble.ts
 ┃ ┗ 📜usePageTitle.ts
 ┣ 📂http
 ┃ ┗ 📜httpClient.ts
 ┣ 📂pages
 ┃ ┣ 📂AdManagement
 ┃ ┃ ┣ 📜AdCard.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Dashboard
 ┃ ┃ ┣ 📜PerformaceSummary.tsx
 ┃ ┃ ┣ 📜PerformanceCard.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂service
 ┃ ┣ 📜AdsService.ts
 ┃ ┗ 📜TrendService.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜mixin.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜conts.ts
 ┃ ┗ 📜utils.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

# **👍 Best Practice**

## 1. 기능 추상화

![11](https://user-images.githubusercontent.com/42020919/200203003-2e66b478-9301-4a4c-9949-d966fe335f81.png)

### 1-1. 대시보드

![12](https://user-images.githubusercontent.com/42020919/200203005-05430b8b-dc45-48e7-9d9c-6d74171d9f10.png)


- `react-day-picker` 라이브러리를 사용하여 날짜 조회 기능 구현
    
    ```tsx
    function DatePicker({ customStyle, fromDate, toDate, onSetClick }: DatePickerProps) {
      const { range, setRange } = useDatePicker();
    
      return (
        <Container customStyle={customStyle}>
          <style>{css}</style>
          <DayPicker
            mode="range"
            defaultMonth={toDate}
            fromDate={fromDate}
            toDate={toDate}
            selected={range}
            onSelect={setRange}
          />
          <Button onClick={onSetClick(range?.from, range?.to)}>확인</Button>
        </Container>
      );
    }
    
    export default DatePicker;
    ```
    
    - 데이터 범위안에 있는 날짜 2022년 2월 ~ 2022년 4월에서만 날짜조회 가능
    
- 통계 광고 현황 카드 구현
    

    ![13](https://user-images.githubusercontent.com/42020919/200203006-d4bbfef0-88da-4c02-a03e-46661fc86037.png)

    
    - 선택한 데이터의 이전 3일치의 데이터와 분석하여 증감분 표시
    
    ```tsx
    const parseData = [
          {
            title: 'ROAS',
            content: Math.round(cur.roas) + '%',
            fluctuation: getFluctucation(prev.roas, cur.roas) + '%',
            isIncreased: cur.roas >= prev.roas,
          },
          {
            title: '광고비',
            content: parseString(cur.cost) + ' 원',
            fluctuation: getFluctucation(prev.cost, cur.cost) + ' 원',
            isIncreased: cur.cost >= prev.cost,
          },
          {
            title: '노출수',
            content: parseString(cur.imp) + ' 회',
            fluctuation: getFluctucation(prev.imp, cur.imp) + ' 회',
            isIncreased: cur.imp >= prev.imp,
          },
          {
            title: '클릭수',
            content: parseString(cur.click) + ' 회',
            fluctuation: getFluctucation(prev.click, cur.click) + ' 회',
            isIncreased: cur.click >= prev.click,
          },
          {
            title: '전환수',
            content: parseString(cur.conv) + ' 회',
            fluctuation: getFluctucation(prev.conv, cur.conv) + ' 회',
            isIncreased: cur.conv >= prev.conv,
          },
          {
            title: '매출',
            content: parseString(cur.convValue) + ' 원',
            fluctuation: getFluctucation(prev.convValue, cur.convValue) + ' 원',
            isIncreased: cur.convValue >= prev.convValue,
          },
        ];
    ```
    
- 선택된 날짜의 데이터 차트 표시
    
    
    ![14](https://user-images.githubusercontent.com/42020919/200203008-b235eeaa-d03f-4a64-b208-1551a8972fea.png)
    
    - 지표 별로 단위(%, 원) 등 변경 표시
    - 2가지 드롭다운이 모두 선택될 경우, 그래프 우측에 y2 눈금자 제공

### 1-2. 광고관리

![15](https://user-images.githubusercontent.com/42020919/200203011-31352652-810a-40e7-a973-67b337e65ba4.png)

- 전체 광고, 진행중, 중단됨 상태별 옵션 제공
- 타이틀에 웹광고 일경우 웹광고, 앱광고일 경우 앱광고 표시

![16](https://user-images.githubusercontent.com/42020919/200203012-e7f96c3a-6a18-4240-ade7-eeb97aaacf15.png)

- 수정하기 버튼 클릭 시 데이터 수정 가능

## 2.  상태 관리

### 2-1. useContext로 데이터 관리

- json 데이터의 가공 및 수정

```tsx
export function AdsProvider({ children, adsService }: AdsProviderProps) {
  const [adsRaw, setAdsRaw] = useState<Advertisement[]>([]);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [currentOption, setCurrentOption] = useState<DropdownOption>(adManagementOptions[0]);

  const filterAd = (adOption: DropdownOption) => {
    setCurrentOption(adOption);

    if (adOption.option === 'all') {
      return setAds(adsRaw);
    }

    setAds(adsRaw.filter((ad) => ad.status === adOption.option));
  };

  const editAd = (edited: Advertisement) => {
    const editedAds = ads.map((ad) => (ad.id === edited.id ? edited : ad));
    setAds(editedAds);
  };

  const getAds = async () => {
    const data = await adsService.get();
    setAdsRaw(data);
    setAds(data);
  };

  useEffect(() => {
    getAds();
  }, []);

  const value = useMemo(() => ({ ads, editAd, filterAd, currentOption }), [ads, currentOption]);

  return <AdsContext.Provider value={value}>{children}</AdsContext.Provider>;
}
```

## **3.** UI/UX

### 3-1. UI 컴포넌트의 재사용성

- 공통으로 사용되는 페이지 타이틀, 사이드바, 탑바 레이아웃 분리하여 페이지별 컴포넌트 재사용
    
    ```tsx
    function Layout({ children }: LayoutProps) {
      return (
        <Container>
          <SideBar />
          <Main>
            <TopBar />
            <PageTitle />
            {children}
          </Main>
    	    </Container>
      );
    }
    
    ```
    

## **4. 스타일**

### 4-1. **GlobalStyle, theme**

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
	...

export default GlobalStyle;
```

```jsx
export const flexBox = (direction = 'row', justify = 'center', align = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;
```

```jsx
export const colors = {
  primary: '#586CF5',
  secondary_01: '#E5F4FD',
  secondary_02: '#EA3A4B',
  grey_50: '#EDEFF1',
  grey_100: '#D1D8DC',
  grey_300: '#94A2AD',
  grey_800: '#3A474E',
  bg_w: '#FFFFFF',
  bg_g: '#F6F7F8',
  graph_01: '#4FADF7',
  graph_02: '#85DA47',
} as const;
```

- Styled Components 전역 스타일링을 사용하여 중복되는 스타일 코드 관리
- mixin 파일에서 기본적인 `flex` 스타일과 화면 크기 조정
- `theme` 을 사용하여 컬러 관리

## 5. GitHub Actions을 사용한 CI/CD 구축

- GitHub에서 제공하는 Actions를 사용하여 `Main` 브랜치에 푸시 될 때 S3 빌드 후 자동으로 배포 되도록 CI/CD 구축

```yaml
name: main action
on:
  push:
    branches:
      - main                        
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout source code.
        uses: actions/checkout@v2
      
      - name: Check Node v
        run: node -v

      - name: Install Dependencies
        run: npm install --frozen-lockfile

      - name: Build
        run: npm run build
      
      - name: Deploy                  # Upload build file to S3
        env:
          AWS_ACCESS_KEY_ID: '${{ secrets.ACCESS_KEY }}'
          AWS_SECRET_ACCESS_KEY: '${{ secrets.SECRET_ACCESS_KEY }}'
        run: |
          aws s3 cp --recursive --region ap-northeast-2 build s3://버킷
```

# **📢 프로젝트 실행방법**

실행할 때 반드시 다음 파일을 최상단에 생성후 실행 해주셔야 합니다.

```jsx
// .env.local
REACT_APP_BASE_URL="https://preonboarding.platdev.net/api/"
DEPLOY_URL ="https://preonboarding-vehicle-rental.herokuapp.com/"
```

```jsx
// 설치
npm install

// 실행
npm start
```

# **📚 팀 규칙**

- **📕 Git commit convention**
    
    
    | rule | 설명 |
    | --- | --- |
    | Feat | 새로운 기능 추가 |
    | Fix | 버그 고친 경우 |
    | Design | css 수정 |
    | Chore | 빌드 업무 수정, 패키지 매니저 수정 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
    | Docs | 문서 수정 |
    | Style | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
    | Rename | 파일 및 폴더 구조 변경 |
    | Refactor | 코드 리팩토링 |
    | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | Remove | 파일 삭제 |
    | Modify | 코드 단순 수정 |
- **📘 Git branch strategy**
- main (배포/운영) ← develop (통합 개발) ← feat-개발내용 (단위 개발)
