#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 🚀 코딩테스트 문제 자동 변환 스크립트
 *
 * 기능:
 * 1. {문제이름}.desc.md 파일을 찾아 표준 양식으로 변환
 * 2. {문제이름}.appr.md 파일을 자동 생성
 */

// 디렉토리 경로 설정
const BASE_DIR = __dirname;  // coding-test/
const BACKJOON_DIR = path.join(BASE_DIR, 'backjoon');
const PROGRAMMERS_DIR = path.join(BASE_DIR, 'programmers');
const TEMPLATE_DIR = __dirname;  // coding-test/

// 템플릿 파일 읽기
function readTemplate(filename) {
  const filePath = path.join(TEMPLATE_DIR, filename);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8');
  }
  return '';
}

// 문제 설명 템플릿
const DESCRIPTION_TEMPLATE = readTemplate('README-description.md');
const APPROACH_TEMPLATE = readTemplate('README-approach.md');

/**
 * 원본 문제 파일을 표준 양식으로 변환
 */
function convertProblemDescription(content, problemName) {
  // 기본적인 변환 로직
  // 실제 구현에서는 더 정교한 파싱이 필요할 수 있음

  let converted = DESCRIPTION_TEMPLATE;

  // 문제 제목 설정
  converted = converted.replace('[문제 제목]', problemName);

  // 기본 플레이스홀더들을 원본 내용에서 추출하여 채움
  // 이 부분은 각 문제의 형식에 따라 커스터마이징 필요
  converted = converted.replace('[문제에 대한 자세한 설명]',
    `${content}\n\n> ⚠️ 이 내용은 원본에서 자동 변환되었습니다. 수동으로 다시 정리해주세요.`);

  return converted;
}

/**
 * 문제 접근법 파일 생성
 */
function createApproachFile(problemName) {
  let approach = APPROACH_TEMPLATE;

  // 문제 제목을 포함한 헤더 추가
  const header = `# 📊 ${problemName} - 분석\n\n`;
  const content = approach.substring(approach.indexOf('1단계:'));

  return header + content;
}

/**
 * 특정 디렉토리에서 .desc.md 파일들을 찾아 처리
 */
function processDirectory(dir, category) {
  if (!fs.existsSync(dir)) {
    console.log(`📁 ${category} 디렉토리가 없습니다: ${dir}`);
    return;
  }

  const items = fs.readdirSync(dir);
  let processedCount = 0;

  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      const problemName = item;
      const discFile = path.join(itemPath, `${problemName}.desc.md`);
      const apprFile = path.join(itemPath, `${problemName}.appr.md`);

      // .desc.md 파일이 존재하는지 확인
      if (fs.existsSync(discFile)) {
        console.log(`🔍 발견: ${category}/${problemName}/${problemName}.desc.md`);

        try {
          // 원본 내용 읽기
          const originalContent = fs.readFileSync(discFile, 'utf8');

          // 표준 양식으로 변환
          const convertedContent = convertProblemDescription(originalContent, problemName);

          // 변환된 내용으로 파일 업데이트
          fs.writeFileSync(discFile, convertedContent, 'utf8');
          console.log(`✅ 변환 완료: ${problemName}.desc.md`);

          // .appr.md 파일이 없으면 생성
          if (!fs.existsSync(apprFile)) {
            const approachContent = createApproachFile(problemName);
            fs.writeFileSync(apprFile, approachContent, 'utf8');
            console.log(`📝 생성 완료: ${problemName}.appr.md`);
          } else {
            console.log(`⚠️  이미 존재함: ${problemName}.appr.md`);
          }

          processedCount++;
        } catch (error) {
          console.error(`❌ 처리 실패: ${problemName} - ${error.message}`);
        }
      }
    }
  });

  console.log(`📊 ${category}: ${processedCount}개 문제 처리 완료\n`);
}

/**
 * 메인 실행 함수
 */
function main() {
  console.log('🚀 코딩테스트 문제 자동 변환 시작...\n');

  // 백준 문제들 처리
  console.log('📁 백준 문제 처리 중...');
  processDirectory(BACKJOON_DIR, 'backjoon');

  // 프로그래머스 문제들 처리
  console.log('📁 프로그래머스 문제 처리 중...');
  processDirectory(PROGRAMMERS_DIR, 'programmers');

  console.log('🎉 모든 처리가 완료되었습니다!');
  console.log('\n💡 다음 단계:');
  console.log('1. 변환된 .desc.md 파일들을 수동으로 검토하고 정리');
  console.log('2. .appr.md 파일들에 단계별 분석 내용 작성');
}

// 스크립트 실행
if (require.main === module) {
  main();
}

module.exports = {
  convertProblemDescription,
  createApproachFile,
  processDirectory
};