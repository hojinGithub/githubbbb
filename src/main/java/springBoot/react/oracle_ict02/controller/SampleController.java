package springBoot.react.oracle_ict02.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springBoot.react.oracle_ict02.dto.SampleDTO;
import springBoot.react.oracle_ict02.service.SampleServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/samples")
public class SampleController {
	
	@Autowired
	private SampleServiceImpl service;
	
	private static final Logger logger = LoggerFactory.getLogger(SampleController.class);

	// http://localhost:8081/samples
	// 상품 목록
	@GetMapping
	public List<SampleDTO> sampleList(HttpServletRequest req, HttpServletResponse res,Model model)
			throws ServletException, IOException {
		
		logger.info("<<< url - sampleList >>>");
		
		return service.listAll();
	}
	
	// 상품 등록 (insert)
	@PostMapping
	public Map<String, Object> sampleInsert(@RequestBody SampleDTO dto)
			throws ServletException, IOException {
		logger.info("<<< url - sampleInsert >>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int insertCnt = service.insertSample(dto);
			if(insertCnt == 1) {
				resultCode = "200";
				resultMsg = "sampleInsert Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println(" [ sampleInsert 성공 ] ");
		
		return map;
	}
	
	// 1건select(수정을 위한 상세페이지)
	@GetMapping("/{id}")
	public SampleDTO fetchSampleByID(@PathVariable int id) 
			throws ServletException, IOException {
		logger.info("<<< url - fetchSampleByID >>>");
		System.out.println("id :" + id);
		
		return service.findById(id);
	}
	
	// update
	@PutMapping("/{id}")	// @RequestBody 누락시 부적합한 열유형
	public Map<String, Object> sampleUpdate(@PathVariable int id, @RequestBody SampleDTO dto)
			throws ServletException, IOException {
		logger.info("<<< url - sampleUpdate >>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			dto.setId(id);
			int updateCnt = service.updateSample(dto);
			if(updateCnt == 1) {
				resultCode = "200";
				resultMsg = "sampleUpdate Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println(" [ sampleUpdate 성공 ] ");
		
		return map;
	}
	
	// 상품 삭제
	@DeleteMapping("/{id}")
	public Map<String, Object> sampleDelete(@PathVariable int id) 
			throws ServletException, IOException {
		logger.info("<<< url - sampleDelete >>>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int deleteCnt = service.deleteSample(id);
			if(deleteCnt == 1) {
				resultCode = "200";
				resultMsg = "sampleDelete Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		}
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println(" [ sampleUpdate 성공 ] ");
		
		return map;
	
	}
}
