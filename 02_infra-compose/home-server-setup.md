# 🏡 홈서버 구축 기초 정리

---

## ✅ 기본 전제

- 리눅스 서버 설치 완료 (UI 없음)
- SSH 접속 가능 상태
- `/home`은 존재, `/opt`는 비어 있음
- 공인 IP 직접 할당 가능하지만, 공유기 사용으로 포트포워딩 가능

---

## 📍 네트워크 설계

### ▶ 공유기 뒤에 둘 것인가?
**추천: 공유기 → 홈서버 (사설 IP + 포트포워딩)**

| 항목 | 직접 공인 IP 사용 | 공유기 사용 |
|------|-------------------|-------------|
| 접근 편의 | 쉬움 | 포트포워딩 필요 |
| 보안 | 매우 위험 | NAT로 1차 보호 |
| 확장성 | 제한적 (공인 IP 갯수 제한) | 다수 서버 운영 가능 |

---

## 🔐 보안 설정

### ▶ `UFW` 방화벽 설정 (집에서 먼저 해야 함)

```bash
sudo apt update && sudo apt install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22       # SSH 포트
sudo ufw allow 80       # HTTP
sudo ufw allow 443      # HTTPS
sudo ufw enable
```

### ▶ `fail2ban` 설치 (SSH 무차별 공격 방지)

```bash
sudo apt install fail2ban
sudo systemctl enable --now fail2ban
```

---

## 🐳 Docker 기반 구성

### ▶ 구성 요소

| 서비스 | 설명 |
|--------|------|
| Nginx | Reverse Proxy |
| Backend | NestJS / FastAPI 등 |
| Frontend | React / Next.js / Svelte 등 |
| MySQL | 관계형 DB |
| PostgreSQL | 또 다른 RDB |
| Storage | MinIO 등 로컬 S3 |

### ▶ 폴더 구조 예시

```plaintext
/opt/home-server/
├── nginx/
│   ├── conf.d/
│   └── docker-compose.yml
├── backend/
│   └── docker-compose.yml
├── frontend/
│   └── docker-compose.yml
├── mysql/
│   └── docker-compose.yml
├── postgresql/
│   └── docker-compose.yml
├── storage/
│   └── docker-compose.yml
├── .env
└── docker-compose.yml (전체 통합)
```

---

## 🤖 Docker Compose vs Kubernetes

| 항목 | Docker Compose | Kubernetes |
|------|----------------|------------|
| 사용 목적 | 개발/소규모 배포 | 대규모 오케스트레이션 |
| 복잡도 | 낮음 (단일 파일) | 높음 (다양한 YAML 구성) |
| 운영 방식 | 단일 서버 중심 | 다중 노드 클러스터 |
| 추천 상황 | 홈서버, 소규모 서비스 | 마이크로서비스, 프로덕션 규모 |

---

## 💡 기타 팁

- `/opt`는 운영용 서비스 배포 폴더로 사용 (공식 표준)
- `/home/kim`은 개발/테스트용 작업 공간으로 분리
- Git, Vim, Tmux, Docker CLI 등을 서버에 미리 설치해두면 유용
- 실제 운영 전이라면 로컬에서 Docker 환경 최대한 똑같이 맞춰서 테스트

---

## 📦 다음 단계 제안

- `docker-compose` 환경 파일 생성
- nginx + frontend + backend 예제 구성부터 시작
- 필요시 전체 통합 `docker-compose.yml` 제공 가능