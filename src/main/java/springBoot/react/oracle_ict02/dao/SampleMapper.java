package springBoot.react.oracle_ict02.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import springBoot.react.oracle_ict02.dto.SampleDTO;

@Mapper	// => DAOImpl 작성하지 않아도 mapper 호출 가능 
public interface SampleMapper {
	
	// 상품목록
	public List<SampleDTO> sampleList();
	
	// 상품 등록
	public int insertSample(SampleDTO dto);
	
	// 상품 수정
	public int updateSample(SampleDTO dto);
	
	// 상품 삭제
	public int deleteSample(int id);
	
	// 상품 상세페이지
	public SampleDTO findById(int id);

}
