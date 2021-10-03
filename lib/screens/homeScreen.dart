import 'package:flutter/material.dart';
import 'package:achieve/model/categories.dart';
import 'package:achieve/widgets/card.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen>
    with SingleTickerProviderStateMixin {
  late ScrollController _scrollController;
  late TabController _tabController;
  int currentIndex = 0;

  _smoothScrollToTop() {
    _scrollController.animateTo(0,
        duration: Duration(microseconds: 300), curve: Curves.ease);
  }

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
    _tabController = TabController(length: categories.length, vsync: this);
    _tabController.addListener(_smoothScrollToTop);
  }

  changePage(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  void dispose() {
    super.dispose();
    _scrollController.dispose();
    _tabController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: NestedScrollView(
          controller: _scrollController,
          headerSliverBuilder: (context, value) {
            return [
              SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.fromLTRB(25, 10, 25, 25),
                ),
              ),
              SliverToBoxAdapter(
                child: Container(
                  padding: EdgeInsets.only(left: 15),
                  alignment: Alignment.centerLeft,
                  child: TabBar(
                      labelPadding: EdgeInsets.only(right: 15),
                      indicatorSize: TabBarIndicatorSize.label,
                      controller: _tabController,
                      isScrollable: true,
                      indicator: UnderlineTabIndicator(),
                      labelColor: Colors.black,
                      labelStyle:
                          TextStyle(fontSize: 19, fontWeight: FontWeight.bold),
                      unselectedLabelColor: Colors.black45,
                      unselectedLabelStyle: TextStyle(
                          fontSize: 18, fontWeight: FontWeight.normal),
                      tabs: List.generate(categories.length,
                          (index) => Text(categories[index].name))),
                ),
              ),
            ];
          },
          body: Container(
            child: TabBarView(
                controller: _tabController,
                children: List.generate(categories.length, (index) {
                  return ListView.builder(
                    itemCount: 4,
                    itemBuilder: (context, index) {
                      return JobCard();
                    },
                    padding: EdgeInsets.symmetric(horizontal: 25),
                  );
                })),
          )),
    );
  }
}
