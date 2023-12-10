package Test2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IISTest2Контрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКлиента")
    private Integer кодклиента;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "НомерТел")
    private Integer номертел;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКлиента() {
      return кодклиента;
    }

    public void setКодКлиента(Integer кодклиента) {
      this.кодклиента = кодклиента;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getНомерТел() {
      return номертел;
    }

    public void setНомерТел(Integer номертел) {
      this.номертел = номертел;
    }


}