/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>

#import <ABI37_0_0React/ABI37_0_0RCTComponent.h>

@interface ABI37_0_0RCTSegmentedControl : UISegmentedControl

@property (nonatomic, copy) NSArray<NSString *> *values;
@property (nonatomic, assign) NSInteger selectedIndex;
@property (nonatomic, copy) ABI37_0_0RCTBubblingEventBlock onChange;

@end
