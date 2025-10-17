# 🔑 API 키 발급 가이드

.env 파일이 생성되었습니다! 이제 아래 단계를 따라 API 키를 발급받고 입력하세요.

## 📝 현재 상태

✅ `.env` 파일 생성 완료  
⏳ API 키 입력 필요  
⏳ 앱 실행 대기

---

## 1️⃣ OpenAI API 키 발급하기

### 단계별 가이드

1. **OpenAI 웹사이트 접속**
   - 링크: https://platform.openai.com
   - 회원가입 또는 로그인

2. **API Keys 페이지로 이동**
   - 링크: https://platform.openai.com/api-keys
   - 또는 상단 메뉴에서 "API keys" 클릭

3. **새 키 생성**
   - "Create new secret key" 버튼 클릭
   - 키 이름 입력 (예: "Blog Generator")
   - "Create secret key" 클릭

4. **키 복사**
   - ⚠️ **중요**: 키는 한 번만 표시됩니다!
   - 전체 키를 복사하세요 (sk-proj-로 시작)
   - 복사한 키를 안전한 곳에 저장

5. **결제 설정** (필요시)
   - 새 계정은 $5 무료 크레딧 제공
   - 무료 크레딧 소진 시 결제 수단 등록 필요
   - https://platform.openai.com/account/billing

### 비용 정보
- **GPT-4o-mini**: 약 $0.15/1M 입력 토큰, $0.60/1M 출력 토큰
- **블로그 글 1개**: 약 $0.01-0.05
- **무료 크레딧**: 신규 가입 시 $5

---

## 2️⃣ Unsplash Access Key 발급하기

### 단계별 가이드

1. **Unsplash Developers 접속**
   - 링크: https://unsplash.com/developers
   - 회원가입 또는 로그인

2. **새 앱 생성**
   - "Your apps" 클릭
   - "New Application" 클릭

3. **약관 동의**
   - API 사용 약관 체크박스 선택
   - 가이드라인 동의

4. **앱 정보 입력**
   - Application name: "Blog Content Generator"
   - Description: "AI 블로그 콘텐츠 생성기"
   - "Create application" 클릭

5. **Access Key 복사**
   - 생성된 앱 페이지에서 "Access Key" 확인
   - 키 전체를 복사

### 제한 사항
- **무료 (Demo)**: 시간당 50 요청
- **프로덕션**: 승인 필요 (무료, 더 많은 요청 가능)

---

## 3️⃣ .env 파일에 키 입력하기

.env 파일이 이미 열려있을 것입니다. 아래와 같이 수정하세요:

### 수정 전:
```env
OPENAI_API_KEY=여기에_OpenAI_API_키를_입력하세요
UNSPLASH_ACCESS_KEY=여기에_Unsplash_Access_Key를_입력하세요
```

### 수정 후 (예시):
```env
OPENAI_API_KEY=sk-proj-abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx
UNSPLASH_ACCESS_KEY=abcdefghijklmnopqrstuvwxyz1234567890
```

### ⚠️ 주의사항
- 따옴표 없이 키만 입력하세요
- 앞뒤 공백 없이 입력하세요
- `=` 기호 앞뒤에 공백 넣지 마세요
- 실제 키로 교체하세요 (위 예시는 가짜 키입니다)

---

## 4️⃣ .env 파일 수정 방법

### 방법 1: 이미 열린 파일 수정
- 열려있는 .env 파일에서 직접 수정
- 저장 (Cmd+S 또는 Ctrl+S)

### 방법 2: 텍스트 에디터로 열기
```bash
# VS Code로 열기
code .env

# nano 에디터로 열기
nano .env

# vim으로 열기
vim .env

# 기본 텍스트 에디터로 열기
open .env
```

---

## 5️⃣ 설정 확인

.env 파일이 다음과 같이 보여야 합니다:

```env
# Blog Content Generator - Environment Variables
# ==============================================

# OpenAI API Key
OPENAI_API_KEY=sk-proj-실제키입력

# Unsplash Access Key
UNSPLASH_ACCESS_KEY=실제키입력

# Server Port
PORT=3001
```

---

## 6️⃣ 앱 실행하기

API 키 입력이 완료되면:

```bash
# 앱 실행
npm run dev

# 브라우저에서 열기
# http://localhost:5173
```

---

## 🔍 문제 해결

### "Invalid API key" 오류
- [ ] 키를 전체 복사했는지 확인
- [ ] 앞뒤 공백이 없는지 확인
- [ ] 따옴표나 특수문자가 없는지 확인
- [ ] OpenAI 대시보드에서 키가 활성화되어 있는지 확인

### "Rate limit exceeded" 오류
- Unsplash: 1시간 대기 후 재시도
- OpenAI: 요청 속도 줄이기 또는 업그레이드

### "Insufficient credits" 오류
- OpenAI 계정에 결제 수단 추가
- https://platform.openai.com/account/billing

### .env 파일을 찾을 수 없음
```bash
# .env 파일 확인
ls -la .env

# 없으면 다시 생성
cp env.template .env
```

---

## 📱 빠른 참조

| 서비스 | 발급 URL | 무료 제공 |
|--------|----------|-----------|
| OpenAI | https://platform.openai.com/api-keys | $5 크레딧 |
| Unsplash | https://unsplash.com/developers | 50 req/hr |

---

## ✅ 체크리스트

완료 여부를 확인하세요:

- [ ] OpenAI API 키 발급 완료
- [ ] Unsplash Access Key 발급 완료
- [ ] .env 파일에 OpenAI 키 입력
- [ ] .env 파일에 Unsplash 키 입력
- [ ] .env 파일 저장
- [ ] `npm run dev` 실행
- [ ] http://localhost:5173 접속
- [ ] 키워드 입력 후 콘텐츠 생성 테스트

---

## 🎉 준비 완료!

모든 설정이 완료되면:

1. 터미널에서 `npm run dev` 실행
2. 브라우저에서 http://localhost:5173 열기
3. 키워드 입력 (예: "인공지능", "여행 팁")
4. "Generate Content" 버튼 클릭
5. 10-15초 대기
6. 생성된 블로그 콘텐츠와 이미지 확인!

**문제가 있으면 README.md의 Troubleshooting 섹션을 참고하세요.**

---

행복한 블로깅 되세요! 🚀✨

