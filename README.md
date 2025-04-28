# Portfolio Server Infrastructure 구축 프로젝트

이 프로젝트는 Docker와 Docker Compose를 활용하여 **개인용 및 소규모 서비스 운영을 위한 서버 인프라**를 구축한 기록입니다. 
백엔드, 프론트엔드, 데이터베이스, 프록시 서버, 스토리지 서버(Minio)를 포함한 실제 환경을 기반으로 구성하였으며, **운영 자동화**, **확장성**, **유지 보수성**을 고려해 설계하였습니다.

---

## 프로젝트 개요

- **목표**: 다양한 서비스(웹, API, DB, 스토리지)를 Docker 기반으로 통합 관리하고, 개발과 운영 환경을 표준화
- **주요 기술 스택**: Docker, Docker Compose, Nginx, PostgreSQL, MySQL, Minio, Node.js (NestJS), React
- **구성 특징**:
  - 개발과 운영 환경을 분리한 Dockerfile 및 Compose 파일 제공
  - 서비스 간 통신을 내부 네트워크로 안전하게 구성
  - Minio를 통한 객체 스토리지 서버 구축 및 관리
  - 환경변수 기반 유연한 설정 지원

---

## 프로젝트 구조

| 폴더 / 파일              | 설명                                              |
|---------------------------|---------------------------------------------------|
| `backend/`                | 운영용 백엔드 소스코드 및 설정 파일                 |
| `backend-dev/`            | 개발용 백엔드 환경 (Dockerfile 및 설정)             |
| `frontend/`               | 운영용 프론트엔드 소스코드 및 설정 파일             |
| `frontend-dev/`           | 개발용 프론트엔드 환경 (Dockerfile 및 설정)          |
| `mysql/`                  | MySQL 데이터베이스 설정 및 초기화 파일               |
| `postgresql/`             | PostgreSQL 데이터베이스 설정 및 초기화 파일           |
| `storage/`                | Minio 스토리지 서버 설정 및 데이터 경로             |
| `nginx/`                  | Nginx 리버스 프록시 및 SSL 설정                     |
| `docker-compose.yml`      | 전체 개발 환경을 구성하는 Docker Compose 파일       |
| `.env`                    | 환경변수 파일 (Docker 환경 설정용)                  |

---

## 개발자가 직접 구축한 인프라 작업 내용

- **Docker 기반 통합 인프라 구축**: 프론트엔드, 백엔드, DB, 스토리지, 프록시 서버를 컨테이너화하여 관리
- **Minio 스토리지 서버 연동**: 파일 업로드 및 데이터 백업을 위한 S3 호환 스토리지 구축
- **환경변수 및 비밀정보 관리**: `.env` 파일을 통한 보안 강화 및 설정 자동화
- **서비스별 스케일업/스케일다운 지원**: 필요한 서비스만 독립적으로 확장/축소 가능
- **CI/CD 구축**:
  - GitHub Actions를 통한 자동 빌드 및 배포 파이프라인 구축
  - `main` 브랜치 푸시 시 Docker 이미지 빌드 및 서버로 자동 배포
  - 비밀번호, 포트, 도메인 정보는 GitHub Secrets로 안전하게 관리
- **문서화 및 재현성 확보**: 다른 개발자도 쉽게 따라 할 수 있도록 `02_infra-compose/` 폴더에 설치 및 운영 가이드 작성

---


## 상세 문서

더 자세한 인프라 설정 및 Docker Compose 구성 방법은 아래 문서에서 확인할 수 있습니다:

👉 [Infrastructure Setup Documentation](./02_infra-compose)

---

## 마무리

> 이 프로젝트는 실제 서비스를 염두에 두고 개발자가 직접 인프라를 설계하고 구축한 기록입니다.

> Built with Docker, Minio, GitHub Actions, and passion for scalable engineering. 🚀

---

