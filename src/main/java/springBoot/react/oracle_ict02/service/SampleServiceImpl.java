package springBoot.react.oracle_ict02.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springBoot.react.oracle_ict02.dao.SampleMapper;
import springBoot.react.oracle_ict02.dto.SampleDTO;

@Service
public class SampleServiceImpl implements SampleService {

	@Autowired
	private SampleMapper dao;
	
	// 상품목록
	@Override
	public List<SampleDTO> listAll() 
			throws ServletException, IOException {
		System.out.println("SampleServiceImpl - listAll");
		
		List<SampleDTO> list = dao.sampleList();
		System.out.println("list : " + list);
		
		return list;
	}

	// 상품 등록
	@Override
	public int insertSample(SampleDTO dto) 
			throws ServletException, IOException {
		System.out.println("SampleServiceImpl - insertSample");
		
		int insertCnt = dao.insertSample(dto);
		
		return insertCnt;
	}

	// 상품 수정
	@Override
	public int updateSample(SampleDTO dto) 
			throws ServletException, IOException {
		System.out.println("SampleServiceImpl - updateSample");
		
		int updateCnt = dao.updateSample(dto);
		
		return updateCnt;
	}

	// 상품 삭제
	@Override
	public int deleteSample(int id) 
			throws ServletException, IOException {
		System.out.println("SampleServiceImpl - deleteSample");
		
		int deleteCnt = dao.deleteSample(id);
		
		return deleteCnt;
	}

	// 상품 상세페이지
	@Override
	public SampleDTO findById(int id) 
			throws ServletException, IOException {
		System.out.println("SampleServiceImpl - findById");
		
		SampleDTO dto = dao.findById(id);
		
		return dto;
	}
	

}
