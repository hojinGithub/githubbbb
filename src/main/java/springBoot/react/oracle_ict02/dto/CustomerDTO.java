package springBoot.react.oracle_ict02.dto;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mvc_customer_tbl")	// 생략시 table or view not found
public class CustomerDTO {
	
	private String email;
	private String name;
	private String password;
	private String hp;
	private Date birthday;
	private Date regdate;
	private String show;
	
	
	@Id
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getHp() {
		return hp;
	}
	
	public void setHp(String hp) {
		this.hp = hp;
	}
	
	public Date getBirthday() {
		return birthday;
	}
	
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	
	public Date getRegdate() {
		return regdate;
	}
	
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	
	public String getShow() {
		return show;
	}
	
	public void setShow(String show) {
		this.show = show;
	}
	

}
