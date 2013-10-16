public class AmoebaDivTwo{
	public int count(String[] table, int K){
		int group = 2;
		int result = 0;
		for(int i=0; i<in.length;i++){
			String row = in[i];
			String[row.length()] amobea = row.toCharArray(); 
			int count = 0; 
			for(int j=0; j<amobea.length;j++){
				if(amobea.compareTo('A')==0){
					count++;
					if(count==group){ result++;count=(group==1)?0:count-1;}
				}else{count=0;}
			}

		}
	}
}